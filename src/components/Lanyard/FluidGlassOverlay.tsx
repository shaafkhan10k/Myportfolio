/* eslint-disable react/no-unknown-property */
import { useRef, useState } from 'react';
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber';
import { useFBO, useTexture, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const BLANK_PIXEL =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

interface FluidGlassOverlayProps {
    active: boolean;
    frontImage: string | null;
    // Normalized [-1,1] mouse coords tracked from the parent DOM element
    mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}

export default function FluidGlassOverlay({ active, frontImage, mouseRef }: FluidGlassOverlayProps) {
    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 50,
        }}>
            <Canvas
                camera={{ position: [0, 0, 20], fov: 15 }}
                gl={{
                    alpha: true,
                    antialias: true,
                    toneMapping: THREE.NoToneMapping,
                }}
            >
                <LensScene active={active} frontImage={frontImage} mouseRef={mouseRef} />
            </Canvas>
        </div>
    );
}

function LensScene({ active, frontImage, mouseRef }: FluidGlassOverlayProps) {
    const lensRef = useRef<THREE.Mesh>(null);
    const bgPlaneRef = useRef<THREE.Mesh>(null);

    // FBO to capture the photo scene for the glass to refract
    const buffer = useFBO();
    // Isolated scene containing only the photo — rendered to the FBO
    const [photoScene] = useState(() => new THREE.Scene());

    const texture = useTexture(frontImage || BLANK_PIXEL) as THREE.Texture;
    const { camera, viewport, size } = useThree();

    useFrame((state, delta) => {
        const { gl } = state;

        // ─── 1. Render photo scene into FBO ───────────────────────────────────
        gl.setRenderTarget(buffer);
        gl.render(photoScene, camera);
        gl.setRenderTarget(null);

        if (!lensRef.current || !bgPlaneRef.current) return;

        // ─── 2. Animate scale (pop in / out) ──────────────────────────────────
        const targetScale = active ? 0.38 : 0;
        const cur = lensRef.current.scale.x;
        const next = cur + (targetScale - cur) * Math.min(1, delta * 9);
        const finalScale = !active && next < 0.005 ? 0 : next;
        lensRef.current.scale.setScalar(finalScale);

        // ─── 3. Follow the DOM mouse position ─────────────────────────────────
        // mouseRef.current is in normalized device coords [-1, 1]
        const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
        const tx = (mouseRef.current.x * v.width) / 2;
        const ty = (mouseRef.current.y * v.height) / 2;

        lensRef.current.position.x += (tx - lensRef.current.position.x) * Math.min(1, delta * 14);
        lensRef.current.position.y += (ty - lensRef.current.position.y) * Math.min(1, delta * 14);
        lensRef.current.position.z = 15;

        // ─── 4. Sync background plane opacity with active state ────────────────
        const mat = bgPlaneRef.current.material as THREE.MeshBasicMaterial;
        mat.opacity += (0 - mat.opacity) * Math.min(1, delta * 9); // keep invisible; FBO is the source
    });

    // Compute fullscreen plane size (at z=0, for the FBO background scene)
    const v0 = viewport.getCurrentViewport(camera, [0, 0, 0]);

    return (
        <>
            {/* ── Photo plane rendered ONLY into FBO (not visible in main scene) ── */}
            {createPortal(
                <mesh>
                    <planeGeometry args={[v0.width * 2, v0.height * 2]} />
                    <meshBasicMaterial map={texture} toneMapped={false} />
                </mesh>,
                photoScene
            )}

            {/* ── Fullscreen background plane shows the FBO texture.
                    The MeshTransmissionMaterial on the lens refracts this plane.
                    Keep opacity 0 so the Lanyard below stays fully visible;
                    only the lens itself reveals the refracted photo. ────────── */}
            <mesh ref={bgPlaneRef} scale={[v0.width, v0.height, 1]}>
                <planeGeometry />
                <meshBasicMaterial
                    map={buffer.texture}
                    transparent
                    toneMapped={false}
                    opacity={0}
                    depthWrite={false}
                />
            </mesh>

            {/* ── Flat glass disc (same shape as lens.glb "Cylinder" geometry) ── */}
            <mesh
                ref={lensRef}
                scale={0}
                position={[0, 0, 15]}
                rotation-x={Math.PI / 2}
            >
                <cylinderGeometry args={[1, 1, 0.25, 128]} />
                <MeshTransmissionMaterial
                    buffer={buffer.texture}
                    ior={1.15}
                    thickness={5}
                    chromaticAberration={0.1}
                    anisotropy={0.01}
                    transmission={1}
                    roughness={0}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    samples={16}
                    color="white"
                />
            </mesh>
        </>
    );
}

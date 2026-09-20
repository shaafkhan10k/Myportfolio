declare module '*.glb' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}

declare module 'meshline' {
    import * as THREE from 'three';
    export class MeshLineGeometry extends THREE.BufferGeometry {}
    export class MeshLineMaterial extends THREE.ShaderMaterial {}
}

// Needed for JSX usage of meshLineGeometry / meshLineMaterial in Lanyard.tsx
declare global {
    namespace JSX {
        interface IntrinsicElements {
            meshLineGeometry: any;
            meshLineMaterial: any;
        }
    }
}


export {};


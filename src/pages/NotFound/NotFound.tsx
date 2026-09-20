import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';
import Navbar from '../../components/Navbar';
import './NotFound.css';

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = anime.timeline({
      easing: 'easeOutExpo'
    });

    tl.add({
      targets: '.notfound-404',
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1200,
    }).add({
      targets: '.notfound-text',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 800,
    }, '-=800').add({
      targets: '.return-button',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 800,
    }, '-=600').add({
      targets: '.notfound-right',
      scale: [0.9, 1],
      opacity: [0, 1],
      duration: 1000,
    }, '-=1000');

    anime({
      targets: '.notfound-shape',
      scale: [1, 1.1, 1],
      opacity: [0.15, 0.25, 0.15],
      duration: 4000,
      loop: true,
      easing: 'easeInOutSine',
      direction: 'alternate'
    });

  }, []);

  return (
    <div className="notfound-page-wrapper" ref={containerRef}>
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="notfound-shape notfound-shape-1"></div>
      <div className="notfound-shape notfound-shape-2"></div>

      <div className="notfound-content">
        <div className="notfound-left">
          <h1 className="notfound-404 opacity-0">404</h1>
          <p className="notfound-text opacity-0">
            Hmm, that's not right. Let's get you back on track.
          </p>
          <Link to="/" className="return-button opacity-0">
            Return to Home
          </Link>
        </div>

        <div className="notfound-right opacity-0">
          <video 
            width="100%" 
            muted 
            playsInline 
            autoPlay 
            loop 
            className="notfound-video drop-shadow-2xl mix-blend-screen"
            poster="https://deck-docs.vercel.app/dizzy-still.webp"
          >
            <source src="https://deck-docs.vercel.app/dizzy.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </div>
  );
}

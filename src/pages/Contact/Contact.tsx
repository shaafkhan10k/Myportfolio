import React, { useEffect, useRef } from 'react';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';
import Navbar from '../../components/Navbar';
import './Contact.css';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const tl = anime.timeline({
      easing: 'easeOutExpo'
    });

    tl.add({
      targets: '.contact-header',
      translateY: [-30, 0],
      opacity: [0, 1],
      duration: 1000,
    }).add({
      targets: ['.contact-form', '.contact-hamster'],
      scale: [0.9, 1],
      opacity: [0, 1],
      duration: 800,
    }, '-=600').add({
      targets: '.form-group',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 600,
      delay: anime.stagger(100)
    }, '-=400').add({
      targets: '.submit-button',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 600,
    }, '-=200');

    // Subtle background animation
    anime({
      targets: '.contact-shape',
      scale: [1, 1.1, 1],
      opacity: [0.15, 0.25, 0.15],
      duration: 4000,
      loop: true,
      easing: 'easeInOutSine',
      direction: 'alternate'
    });

  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Premium submit animation using animejs
    if (formRef.current) {
      anime({
        targets: formRef.current,
        scale: [1, 0.98, 1],
        duration: 400,
        easing: 'easeInOutQuad'
      });
      
      const btn = formRef.current.querySelector('.submit-button');
      anime({
        targets: btn,
        scale: [1, 0.95, 1],
        duration: 300,
        easing: 'easeInOutQuad'
      });
    }
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const label = e.target.parentElement?.querySelector('.form-label');
    if (label) {
      anime({
        targets: label,
        color: '#D7E2EA',
        duration: 300,
        easing: 'easeOutSine'
      });
    }
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const label = e.target.parentElement?.querySelector('.form-label');
    if (label) {
      anime({
        targets: label,
        color: 'rgba(215, 226, 234, 0.6)',
        duration: 300,
        easing: 'easeOutSine'
      });
    }
  };

  return (
    <div className="contact-page-wrapper" ref={containerRef}>
      <Navbar />

      <div className="contact-shape contact-shape-1"></div>
      <div className="contact-shape contact-shape-2"></div>

      <div className="contact-content">
        <div className="contact-header">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-[10vw] sm:text-[8vw] md:text-[6vw] mb-4">
            Let's Connect
          </h1>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide opacity-80 max-w-lg mx-auto">
            Ready to start a project or just want to say hi? Drop me a message below.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 w-full mt-12 max-w-[1500px] mx-auto px-4 lg:px-12">
          <div className="w-full md:w-1/2 lg:w-[45%] flex justify-center lg:justify-start opacity-0 contact-hamster">
            <img 
              src="/3D_Assets/Static_3D/Free_hamster_3d_illustration/PNG/Hamster.png" 
              alt="3D Hamster" 
              className="w-[280px] md:w-[400px] object-contain drop-shadow-2xl"
            />
          </div>

          <form className="contact-form opacity-0 w-full md:w-1/2 lg:w-[50%]" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group opacity-0">
              <label className="form-label">Name</label>
              <input 
                type="text" 
                className="form-input" 
                required 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <div className="focus-border"></div>
            </div>
            
            <div className="form-group opacity-0">
              <label className="form-label">Email</label>
              <input 
                type="email" 
                className="form-input" 
                required 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <div className="focus-border"></div>
            </div>
            
            <div className="form-group opacity-0">
              <label className="form-label">Message</label>
              <textarea 
                className="form-textarea" 
                required
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></textarea>
              <div className="focus-border"></div>
            </div>

            <button type="submit" className="submit-button opacity-0">
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

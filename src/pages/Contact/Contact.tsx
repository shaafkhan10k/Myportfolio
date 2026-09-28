import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm, ValidationError } from '@formspree/react';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';
import Navbar from '../../components/Navbar';
import SocialFooter from '../../components/SocialFooter';
import './Contact.css';

const FORMSPREE_FORM_ID = 'mpwjajjw';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animatedElements = container.querySelectorAll(
      '.contact-header, .contact-form, .contact-hamster, .form-group, .submit-button'
    );

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      anime.set(animatedElements, {
        opacity: 1,
        translateY: 0,
        scale: 1,
      });
      return;
    }

    const timeline = anime.timeline({ easing: 'easeOutExpo' });

    timeline
      .add({
        targets: container.querySelector('.contact-header'),
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 1000,
      })
      .add(
        {
          targets: [
            container.querySelector('.contact-form'),
            container.querySelector('.contact-hamster'),
          ],
          scale: [0.9, 1],
          opacity: [0, 1],
          duration: 800,
        },
        '-=600'
      )
      .add(
        {
          targets: container.querySelectorAll('.form-group'),
          translateY: [20, 0],
          opacity: [0, 1],
          duration: 600,
          delay: anime.stagger(100),
        },
        '-=400'
      )
      .add(
        {
          targets: container.querySelector('.submit-button'),
          translateY: [20, 0],
          opacity: [0, 1],
          duration: 600,
        },
        '-=200'
      );

    anime({
      targets: container.querySelectorAll('.contact-shape'),
      scale: [1, 1.1, 1],
      opacity: [0.15, 0.25, 0.15],
      duration: 4000,
      loop: true,
      easing: 'easeInOutSine',
      direction: 'alternate',
    });

    return () => {
      anime.remove(container.querySelectorAll('.contact-shape'));
      anime.remove(animatedElements);
    };
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
    }
  }, [state.succeeded]);

  const handleInputFocus = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const label = event.target.parentElement?.querySelector('.form-label');
    if (label) {
      anime({
        targets: label,
        color: '#D7E2EA',
        duration: 300,
        easing: 'easeOutSine',
      });
    }
  };

  const handleInputBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const label = event.target.parentElement?.querySelector('.form-label');
    if (label) {
      anime({
        targets: label,
        color: 'rgba(215, 226, 234, 0.6)',
        duration: 300,
        easing: 'easeOutSine',
      });
    }
  };

  const formErrors = state.errors?.getFormErrors() ?? [];

  return (
    <div className="contact-page-wrapper" ref={containerRef}>
      <Helmet>
        <title>Contact Shaaf Khan | AI Engineer</title>
        <meta
          name="description"
          content="Contact Shaaf Khan for AI, automation, computer-vision, or web projects. Also open to AI and automation roles in Islamabad and Rawalpindi."
        />
        <link rel="canonical" href="https://shaafkhan.vercel.app/contact" />
        <meta property="og:title" content="Contact Shaaf Khan | AI Engineer" />
        <meta property="og:url" content="https://shaafkhan.vercel.app/contact" />
      </Helmet>

      <Navbar />

      <div className="contact-shape contact-shape-1" aria-hidden="true"></div>
      <div className="contact-shape contact-shape-2" aria-hidden="true"></div>

      <div className="contact-content">
        <div className="contact-header">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-[10vw] sm:text-[8vw] md:text-[6vw] mb-4">
            Contact Shaaf Khan
          </h1>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide opacity-80 max-w-lg mx-auto">
            Have an AI, automation, computer-vision, or web project in mind? Send
            a short note about the problem, your goal, and any deadline or
            technical limits. Also open to AI and automation roles in Islamabad
            and Rawalpindi.
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

          <form
            id="contact-form"
            className="contact-form opacity-0 w-full md:w-1/2 lg:w-[50%]"
            ref={formRef}
            onSubmit={handleSubmit}
            aria-busy={state.submitting}
          >
            <input
              type="hidden"
              name="_subject"
              value="New message from Shaaf Khan's portfolio"
            />

            <div className="form-group opacity-0">
              <label className="form-label" htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                className="form-input"
                required
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <div className="focus-border" aria-hidden="true"></div>
              <div className="field-error" id="contact-name-error">
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="form-group opacity-0">
              <label className="form-label" htmlFor="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                className="form-input"
                required
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <div className="focus-border" aria-hidden="true"></div>
              <div className="field-error" id="contact-email-error">
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="form-group opacity-0">
              <label className="form-label" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="form-textarea"
                required
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <div className="focus-border" aria-hidden="true"></div>
              <div className="field-error" id="contact-message-error">
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
            </div>

            {state.succeeded && (
              <p className="form-feedback form-feedback-success" role="status">
                Thanks for reaching out. Your message has been sent.
              </p>
            )}

            {state.errors && !state.succeeded && (
              <div className="form-feedback form-feedback-error" role="alert">
                {formErrors.length > 0 ? (
                  formErrors.map((error, index) => (
                    <p key={`${error.code ?? 'form-error'}-${index}`}>
                      {error.message}
                    </p>
                  ))
                ) : (
                  <p>We couldn&apos;t send your message. Please try again.</p>
                )}
              </div>
            )}

            <button
              type="submit"
              className="submit-button opacity-0"
              disabled={state.submitting}
            >
              <span>
                {state.submitting
                  ? 'Sending...'
                  : state.succeeded
                    ? 'Sent!'
                    : 'Send Message'}
              </span>
            </button>
          </form>
        </div>

        <SocialFooter />
      </div>
    </div>
  );
}

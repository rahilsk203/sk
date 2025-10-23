import * as React from 'react';
import { gsap } from "gsap";
import './Preloader.scss';

export default function Preloader() {
  const el = React.useRef();
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    if (!el.current) return;

    // Create a more sophisticated timeline with multiple sequences
    const tl = gsap.timeline();
    
    // Initial entrance animation
    tl.from(".loading-dot", {
      scale: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "back.out(1.7)"
    })
    // Main bounce sequence
    .to(".loading-dot", {
      y: -40,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    })
    .to(".loading-dot", {
      y: 0,
      scale: 1.3,
      duration: 0.4,
      stagger: 0.1,
      ease: "bounce.out"
    })
    // Color pulse effect
    .to(".loading-dot", {
      backgroundColor: "#00ffaa",
      duration: 0.3,
      stagger: 0.1
    })
    .to(".loading-dot", {
      backgroundColor: "#10e956",
      duration: 0.3,
      stagger: 0.1
    })
    // Secondary bounce with rotation
    .to(".loading-dot", {
      y: -25,
      rotation: 180,
      duration: 0.4,
      stagger: 0.12,
      ease: "power3.out"
    })
    .to(".loading-dot", {
      y: 0,
      rotation: 0,
      scale: 1,
      duration: 0.3,
      stagger: 0.12,
      ease: "elastic.out(1, 0.3)"
    })
    // Final spin sequence
    .to(".loading-dot", {
      rotation: 360,
      scale: 1.4,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)"
    })
    .to(".loading-dot", {
      scale: 1,
      rotation: 0,
      duration: 0.4,
      stagger: 0.1
    })
    // Fade out sequence with delay
    .to(".anime", {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      onComplete: () => setIsVisible(false)
    });

    return () => {
      tl.kill();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div ref={el}>
      <div className="anime">
        <div className="load">
          <div className="loading-container">
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
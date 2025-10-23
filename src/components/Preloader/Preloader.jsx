import * as React from 'react';
import { gsap } from "gsap";
import './Preloader.scss';

export default function Preloader() {
  const el = React.useRef();
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    if (!el.current) return;

    // Morphing shapes animation
    const tl = gsap.timeline({ repeat: -1 });
    
    // Circle to square morph
    tl.to(".morph-shape", {
      borderRadius: "0%",
      rotation: 45,
      duration: 1.5,
      ease: "elastic.inOut(1, 0.3)"
    })
    // Square to triangle
    .to(".morph-shape", {
      borderRadius: "0 50% 50% 50%",
      rotation: 180,
      duration: 1.5,
      ease: "elastic.inOut(1, 0.3)"
    })
    // Triangle to diamond
    .to(".morph-shape", {
      borderRadius: "0%",
      rotation: 225,
      duration: 1.5,
      ease: "elastic.inOut(1, 0.3)"
    })
    // Diamond back to circle
    .to(".morph-shape", {
      borderRadius: "50%",
      rotation: 360,
      duration: 1.5,
      ease: "elastic.inOut(1, 0.3)"
    });
    
    // Independent dot pulsing animation
    const pulseTl = gsap.timeline({ repeat: -1 });
    pulseTl.to(".pulse-dot", {
      scale: 1.8,
      opacity: 0.7,
      duration: 0.8,
      stagger: 0.2,
      ease: "power1.inOut"
    })
    .to(".pulse-dot", {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power1.inOut"
    });
    
    // Orbiting dots animation
    const orbitTl = gsap.timeline({ repeat: -1 });
    orbitTl.to(".orbit-dot", {
      rotation: 360,
      duration: 8,
      ease: "none"
    });
    
    // Color shifting for all elements
    const colorTl = gsap.timeline({ repeat: -1, yoyo: true });
    colorTl.to([".morph-shape", ".pulse-dot", ".orbit-dot"], {
      backgroundColor: "#00ffaa",
      duration: 2
    })
    .to([".morph-shape", ".pulse-dot", ".orbit-dot"], {
      backgroundColor: "#ff00aa",
      duration: 2
    })
    .to([".morph-shape", ".pulse-dot", ".orbit-dot"], {
      backgroundColor: "#10e956",
      duration: 2
    });

    // Final exit sequence
    const exitTl = gsap.timeline({
      delay: 8,
      onComplete: () => setIsVisible(false)
    });
    
    exitTl.to(".preloader-content", {
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    return () => {
      tl.kill();
      pulseTl.kill();
      orbitTl.kill();
      colorTl.kill();
      exitTl.kill();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div ref={el} className="anime">
      <div className="preloader-content">
        {/* Central morphing shape */}
        <div className="morph-container">
          <div className="morph-shape"></div>
        </div>
        
        {/* Pulsing dots */}
        <div className="pulse-dots">
          <div className="pulse-dot"></div>
          <div className="pulse-dot"></div>
          <div className="pulse-dot"></div>
        </div>
        
        {/* Orbiting dots */}
        <div className="orbit-container">
          <div className="orbit-dot orbit-dot-1"></div>
          <div className="orbit-dot orbit-dot-2"></div>
          <div className="orbit-dot orbit-dot-3"></div>
        </div>
      </div>
    </div>
  );
}
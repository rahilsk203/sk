import React, { useState } from 'react';
import './ProjectSlider.scss';

function ProjectSlider({ data, setBackground }) {
    const [current, setCurrent] = useState(0);
    const length = data.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        setBackground(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        setBackground(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(data) || data.length <= 0) {
        return null;
    }

    return (
        <div className="slider">
            <div className="left-arrow" onClick={prevSlide}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="right-arrow" onClick={nextSlide}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            {data.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img 
                                src={slide.img} 
                                alt={`project-${index}`} 
                                className="image" 
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default ProjectSlider;
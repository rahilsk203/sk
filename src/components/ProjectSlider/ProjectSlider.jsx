import React, { useState, useEffect } from 'react';
import { ProjectData } from './projectData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './ProjectSlider.scss';

const ProjectSlider = ({ setBackground }) => {
  const [current, setCurrent] = useState(0);
  const length = ProjectData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Update background when current slide changes
  useEffect(() => {
    setBackground(current);
  }, [current, setBackground]);

  if (!Array.isArray(ProjectData) || ProjectData.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {ProjectData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          > 
            {index === current && (
              <>
                <img src={slide.img} alt='project image' className='image' />
                <div className='detail'>
                  <h4>{slide.title}</h4>
                  <p className='desc'>{slide.description}</p>
                  <span>
                    <p className='stack'>{slide.stack}</p>
                    <a href={slide.link} target='_blank' rel='noopener noreferrer'>visit ↵</a>
                  </span>
                </div>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ProjectSlider;
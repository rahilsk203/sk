import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import ProjectSlider from '../ProjectSlider/ProjectSlider';
import { ProjectData } from '../ProjectSlider/projectData';
import './Home.scss';

function Home() {
    const [background, setBackground] = useState(0);

    // Use the project data directly for background
    const Styles = {
       backgroundImage: `url(${ProjectData[background]?.img})`
    }

    useEffect(() => {
        // Intersection Observer for animations
        const hiddenElements = document.querySelectorAll('.hidden');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        hiddenElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="home" id="home">
            <div className="home-intro hidden">
                <div className="content">
                    <div className="content-tertiary">
                        <p><span>👋</span> Hi there! I'm Rahil S K</p>
                    </div>
                    <div className="content-primary">
                        <h1>a <span>Full-Stack Developer</span>. I build innovative web solutions with <span>JavaScript, Python, PHP & TypeScript</span> and <span>AI technologies</span></h1>
                    </div>
                    <div className="content-secondary">
                        <p>Full-Stack Developer | JavaScript, Python, PHP, TypeScript | AI Enthusiast. Strong in JavaScript (frontend & backend), passionate about AI & automation projects, exploring new technologies and building innovative solutions. Open for collaboration on Web Development & AI projects.</p>
                    </div>
                </div>

                <div className="hero-icon">
                    <svg viewBox="0 0 500 366" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="150" cy="150" r="50" fill="#14E956" className="b-one"/>
                        <circle cx="350" cy="150" r="50" fill="#FFBD44" className="b-two"/>
                        <circle cx="250" cy="250" r="50" fill="#00CA4E" className="b-three"/>
                        <rect x="200" y="100" width="100" height="100" fill="#61DAFB" className="a-one" opacity="0.7"/>
                        <rect x="180" y="120" width="60" height="60" fill="#F7DF1E" className="a-two" opacity="0.7"/>
                        <rect x="260" y="120" width="60" height="60" fill="#339933" className="a-three" opacity="0.7"/>
                        <rect x="220" y="180" width="60" height="60" fill="#3178C6" className="a-four" opacity="0.7"/>
                        <circle cx="200" cy="200" r="20" fill="#CC6699" className="a-five" opacity="0.8"/>
                        <circle cx="300" cy="200" r="20" fill="#F24E1E" className="a-six" opacity="0.8"/>
                        <circle cx="250" cy="150" r="15" fill="#47A248" className="a-seven" opacity="0.8"/>
                        <circle cx="250" cy="300" r="25" fill="#DD0031" className="a-eight" opacity="0.8"/>
                        <polygon points="250,50 280,100 220,100" fill="#8247E5" className="a-nine" opacity="0.8"/>
                    </svg>
                </div>
            </div>

            <div className="tooling hidden">
                <div className="tooling-title">
                    <h2>Tech Stack</h2>
                </div>
                <div className="tooling-box">
                    <div className="box-content">
                        <div className="box-icon">
                            <svg viewBox="0 0 24 24" className="icon">
                                <rect width="24" height="24" fill="#F7DF1E" rx="4"/>
                                <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#000" fontWeight="bold">JS</text>
                            </svg>
                        </div>
                        <div className="box-text">
                            <p>JavaScript</p>
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon">
                            <svg viewBox="0 0 24 24" className="icon">
                                <rect width="24" height="24" fill="#3178C6" rx="4"/>
                                <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">TS</text>
                            </svg>
                        </div>
                        <div className="box-text">
                            <p>TypeScript</p>
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon">
                            <svg viewBox="0 0 24 24" className="icon">
                                <circle cx="12" cy="12" r="10" fill="#3776ab"/>
                                <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">Py</text>
                            </svg>
                        </div>
                        <div className="box-text">
                            <p>Python</p>
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon">
                            <svg viewBox="0 0 24 24" className="icon">
                                <rect width="24" height="24" fill="#777BB4" rx="4"/>
                                <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">PHP</text>
                            </svg>
                        </div>
                        <div className="box-text">
                            <p>PHP</p>
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon">
                            <svg viewBox="0 0 24 24" className="icon">
                                <circle cx="12" cy="12" r="10" fill="#47A248"/>
                                <text x="12" y="16" textAnchor="middle" fontSize="6" fill="#fff" fontWeight="bold">Mongo</text>
                            </svg>
                        </div>
                        <div className="box-text">
                            <p>MongoDB</p>
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon">
                            <svg viewBox="0 0 24 24" className="icon">
                                <rect width="24" height="24" fill="#4479A1" rx="4"/>
                                <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">MySQL</text>
                            </svg>
                        </div>
                        <div className="box-text">
                            <p>MySQL</p>
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon">
                            <svg viewBox="0 0 24 24" className="icon">
                                <circle cx="12" cy="12" r="12" fill="#F48120"/>
                                <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">CW</text>
                            </svg>
                        </div>
                        <div className="box-text">
                            <p>Cloudflare Workers</p>
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon">
                            <svg viewBox="0 0 24 24" className="icon">
                                <circle cx="12" cy="12" r="10" fill="#61DAFB"/>
                                <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#000" fontWeight="bold">Vite</text>
                            </svg>
                        </div>
                        <div className="box-text">
                            <p>Vite</p>
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon">
                            <svg viewBox="0 0 24 24" className="icon">
                                <circle cx="12" cy="12" r="10" fill="#000"/>
                                <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">AI</text>
                            </svg>
                        </div>
                        <div className="box-text">
                            <p>AI</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="showroom-section" id="work">
                <div className="showroom-title hidden">
                    <h2>Projects</h2>
                </div>
                <div className="showroom hidden">
                    <div className="showroom-background" style={Styles}></div>
                    <ProjectSlider setBackground={setBackground} />
                </div>
                <div className="button-wrap">
                    <button className="butt">
                        View All Projects
                    </button>
                </div>
            </div>

            <div className="quote hidden">
                <div className="quote-body">
                    <div className="left">
                        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 80L20 40C20 30 30 20 40 20L60 20C70 20 80 30 80 40L80 60C80 70 70 80 60 80L40 80Z" fill="#14E956"/>
                            <path d="M35 50L25 30L45 30Z" fill="#1E2128"/>
                        </svg>
                    </div>
                    <div className="quote-body-content">
                        <p>
                            <span>Code</span> is my tool, innovation is my goal.
                        </p>
                    </div>
                    <div className="right">
                        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 80L20 40C20 30 30 20 40 20L60 20C70 20 80 30 80 40L80 60C80 70 70 80 60 80L40 80Z" fill="#14E956"/>
                            <path d="M65 50L75 70L55 70Z" fill="#1E2128"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="featured hidden">
                <div className="featured-title">
                    <h2>About Me</h2>
                </div>
                <div className="featured-box">
                    <article className="article">
                        <div className="bottom">
                            <p>Strong in JavaScript (frontend & backend)</p>
                            <p>Passionate about AI & automation projects</p>
                            <p>Exploring new technologies and building innovative solutions</p>
                            <p>Open for collaboration on Web Development & AI projects</p>
                            <div className="info">
                                <p>Contact: rahilsk203@gmail.com</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default Home;
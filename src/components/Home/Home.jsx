import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ProjectSlider from '../ProjectSlider/ProjectSlider';
import { ProjectData } from '../ProjectSlider/projectData';
import './Home.scss';

// Import technology icons from assets
import ReactIcon from '../../assets/react-svgrepo-com.svg';
import NodeIcon from '../../assets/nodejs-svgrepo-com.svg';
import MySQLIcon from '../../assets/mysql-svgrepo-com.svg';
import TailwindIcon from '../../assets/tailwindcss-icon-svgrepo-com.svg';
import PythonIcon from '../../assets/python-svgrepo-com.svg';
import PHPIcon from '../../assets/php-svgrepo-com.svg';
import BashIcon from '../../assets/bash-svgrepo-com.svg';

// Data array for project images
const Data = [
    {
        id: 0,
        img: "https://ik.imagekit.io/onyedika/phoneapp_oXM1Z9FA_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667104369642",
    },
    {
        id: 1,
        img: "https://ik.imagekit.io/onyedika/slide/pipar-beta?ik-sdk-version=javascript-1.4.3&updatedAt=1664831519274",
    },
    {
        id: 2,
        img: "https://ik.imagekit.io/onyedika/slide/pipar_peinACEKO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256618",
    },
    {
        id: 3,
        img: "https://ik.imagekit.io/onyedika/slide/calender_S6GI-SE7_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256123",
    },
    {
        id: 4,
        img: "https://ik.imagekit.io/onyedika/slide/movie_Si8QWOouP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256396",
    },
    {
        id: 5,
        img: "https://ik.imagekit.io/onyedika/slide/natour_QGZwpr7Ta.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256510",
    },
    {
        id: 6,
        img: "https://ik.imagekit.io/onyedika/slide/ncehr_GV14iEwWG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256179",
    },
    {
        id: 7,
        img: "https://ik.imagekit.io/onyedika/slide/guvve_sUg2If5kc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256276",
    },
    {
        id: 8,
        img: "https://ik.imagekit.io/onyedika/slide/web3-forum_2lXPIycqd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256840",
    },
];

// Technology icons as SVG components
const ReactIconComponent = () => (
    <img src={ReactIcon} alt="React" className="icon" />
);

const NodeIconComponent = () => (
    <img src={NodeIcon} alt="Node.js" className="icon" />
);

const MySQLIconComponent = () => (
    <img src={MySQLIcon} alt="MySQL" className="icon" />
);

const TailwindIconComponent = () => (
    <img src={TailwindIcon} alt="Tailwind CSS" className="icon" />
);

const PythonIconComponent = () => (
    <img src={PythonIcon} alt="Python" className="icon" />
);

const PHPIconComponent = () => (
    <img src={PHPIcon} alt="PHP" className="icon" />
);

const BashIconComponent = () => (
    <img src={BashIcon} alt="Bash/Shell" className="icon" />
);

// Keep existing JavaScript, TypeScript, Sass, Figma, Mongo, Angular, Solidity, Polygon icons for other technologies
const JavaScriptIcon = () => (
    <svg viewBox="0 0 24 24" className="icon">
        <rect width="24" height="24" fill="#F7DF1E" rx="4"/>
        <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#000" fontWeight="bold">JS</text>
    </svg>
);

const TypeScriptIcon = () => (
    <svg viewBox="0 0 24 24" className="icon">
        <rect width="24" height="24" fill="#3178C6" rx="4"/>
        <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">TS</text>
    </svg>
);

const SassIcon = () => (
    <svg viewBox="0 0 24 24" className="icon">
        <circle cx="12" cy="12" r="10" fill="#CC6699"/>
        <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">Sass</text>
    </svg>
);

const FigmaIcon = () => (
    <svg viewBox="0 0 24 24" className="icon">
        <rect width="24" height="24" fill="#F24E1E" rx="4"/>
        <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">Fig</text>
    </svg>
);

const MongoIcon = () => (
    <svg viewBox="0 0 24 24" className="icon">
        <circle cx="12" cy="12" r="10" fill="#47A248"/>
        <text x="12" y="16" textAnchor="middle" fontSize="6" fill="#fff" fontWeight="bold">Mongo</text>
    </svg>
);

const AngularIcon = () => (
    <svg viewBox="0 0 24 24" className="icon">
        <polygon points="12,2 22,6 20,20 12,22 4,20 2,6" fill="#DD0031"/>
        <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">Ang</text>
    </svg>
);

const SolidityIcon = () => (
    <svg viewBox="0 0 24 24" className="icon">
        <polygon points="12,2 22,12 12,22 2,12" fill="#363636"/>
        <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">Sol</text>
    </svg>
);

const PolygonIcon = () => (
    <svg viewBox="0 0 24 24" className="icon">
        <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" fill="#8247E5"/>
        <text x="12" y="16" textAnchor="middle" fontSize="6" fill="#fff" fontWeight="bold">Poly</text>
    </svg>
);

function Home() {
    const Illus = useRef();
    const i = gsap.utils.selector(Illus);
    const tlm = useRef();
    const dlm = useRef();

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

    const nav = () => {
        // Simple navigation without router
        window.location.href = '/work';
    }

    return (
        <div className="home" id="home">
            <div className="home-intro hidden">
                <div className="content">
                    <div className="content-tertiary">
                        <p><span>✌🏻</span> Hi there! I'm SK Sohel</p>
                    </div>
                    <div className="content-primary">
                        <h1>a <span>Full-Stack Developer</span>. I build smart business solutions with <span>AI automation</span> and <span>scripting</span></h1>
                    </div>
                    <div className="content-secondary">
                        <p>I'm a Full-Stack Developer, AI Automation Enthusiast, and System Scripter. I build smart business solutions by combining Web Development, AI, and Scripting. My focus is on creating AI-powered systems to automate everyday tasks and scale business efficiency.</p>
                    </div>
                </div>

                <div className="hero-icon">
                    <svg ref={Illus} viewBox="0 0 500 366" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <ReactIconComponent />
                        </div>
                        <div className="box-text">
                            <p>React.js</p>
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon">
                            <NodeIconComponent />
                        </div>
                        <div className="box-text">
                            <p>Node.js</p>
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon">
                            <JavaScriptIcon />
                        </div>
                        <div className="box-text">
                            <p>JavaScript</p>
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon">
                            <TypeScriptIcon />
                        </div>
                        <div className="box-text">
                            <p>TypeScript</p>
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon">
                            <MySQLIconComponent />
                        </div>
                        <div className="box-text">
                            <p>MySQL</p>
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon">
                            <TailwindIconComponent />
                        </div>
                        <div className="box-text">
                            <p>Tailwind CSS</p>
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon">
                            <PythonIconComponent />
                        </div>
                        <div className="box-text">
                            <p>Python</p>
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon">
                            <PHPIconComponent />
                        </div>
                        <div className="box-text">
                            <p>PHP</p>
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon">
                            <BashIconComponent />
                        </div>
                        <div className="box-text">
                            <p>Bash/Shell</p>
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon">
                            <SolidityIcon />
                        </div>
                        <div className="box-text">
                            <p>LangChain</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="showroom-section" id="work">
                <div className="showroom-title hidden">
                    <h2>Featured Projects</h2>
                </div>
                <div className="showroom hidden">
                    <div className="showroom-background" style={Styles}></div>
                    <ProjectSlider setBackground={setBackground} />
                </div>
                <div className="button-wrap">
                    <button className="butt" onClick={nav}>
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
                            <span>Code</span> is like humor. When you have to explain it, it's bad.
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
                    <h2>Featured Writing</h2>
                </div>
                <div className="featured-box">
                    <article className="article">
                        <div className="top">
                            <p>Featured <span>Article</span></p>
                        </div>
                        <div className="bottom">
                            <h4>Building AI-Powered Automation Systems for Business Efficiency</h4>
                            <div className="info">
                                <p>Read Article</p>
                                <a href="https://dev.to/sksohel" target="_blank" rel="noopener noreferrer" aria-label="Read full article">
                                    →
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default Home;
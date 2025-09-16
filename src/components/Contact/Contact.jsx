import React, { useState, useEffect } from 'react';
import './Contact.scss';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    useEffect(() => {
        // Performance optimized Intersection Observer with throttling
        const observerOptions = {
            threshold: [0.1, 0.3, 0.5],
            rootMargin: '50px 0px -50px 0px'
        };

        const hiddenElements = document.querySelectorAll('.contact .hidden');
        const observedElements = new Set();
        
        const observer = new IntersectionObserver((entries) => {
            // Use requestAnimationFrame for smooth animation triggers
            requestAnimationFrame(() => {
                entries.forEach((entry) => {
                    const element = entry.target;
                    
                    if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                        if (!observedElements.has(element)) {
                            element.classList.add('show');
                            observedElements.add(element);
                            
                            // Unobserve after animation to reduce overhead
                            setTimeout(() => {
                                observer.unobserve(element);
                            }, 600);
                        }
                    }
                });
            });
        }, observerOptions);

        // Batch DOM operations
        const fragment = document.createDocumentFragment();
        hiddenElements.forEach((el) => {
            observer.observe(el);
        });

        // Initial page load optimization with RAF
        requestAnimationFrame(() => {
            const contactElement = document.querySelector('.contact');
            if (contactElement) {
                contactElement.classList.add('loaded');
            }
        });

        // Memory cleanup
        return () => {
            observer.disconnect();
            observedElements.clear();
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Optimized state update with functional update
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Optimized state update with single RAF
        requestAnimationFrame(() => {
            setIsSubmitting(true);
        });
        
        // Simulate form submission with optimized timing
        setTimeout(() => {
            requestAnimationFrame(() => {
                setIsSubmitting(false);
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                
                // Clear success message with optimized timing
                setTimeout(() => {
                    requestAnimationFrame(() => {
                        setSubmitStatus('');
                    });
                }, 3000);
            });
        }, 1000);
    };

    return (
        <div className="contact" id="contact">
            <div className="contact-header hidden">
                <h1>Get In Touch</h1>
                <p>Let's connect and build something amazing together</p>
            </div>

            <div className="social-cards-grid hidden">
                <a href="https://github.com/rahilsk203" target="_blank" rel="noopener noreferrer" className="social-card github-card hidden">
                    <div className="card-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.55C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.73 3.75 17.445C3.33 17.22 2.73 16.635 3.735 16.62C4.68 16.605 5.355 17.52 5.58 17.88C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"/>
                        </svg>
                    </div>
                    <div className="card-content">
                        <h3>GitHub</h3>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/sk-sohel" target="_blank" rel="noopener noreferrer" className="social-card linkedin-card hidden">
                    <div className="card-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"/>
                        </svg>
                    </div>
                    <div className="card-content">
                        <h3>LinkedIn</h3>
                    </div>
                </a>

                <a href="https://x.com/sohelsk0" target="_blank" rel="noopener noreferrer" className="social-card twitter-card hidden">
                    <div className="card-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.953 4.57C23.054 4.967 22.089 5.239 21.078 5.373C22.119 4.773 22.919 3.814 23.297 2.666C22.326 3.222 21.253 3.614 20.122 3.82C19.204 2.87 17.897 2.28 16.464 2.28C13.755 2.28 11.556 4.478 11.556 7.188C11.556 7.578 11.6 7.956 11.684 8.318C7.687 8.127 4.066 6.135 1.64 3.161C1.213 3.924 0.974 4.773 0.974 5.678C0.974 7.404 1.844 8.924 3.162 9.802C2.355 9.776 1.596 9.563 0.934 9.204V9.264C0.934 11.647 2.641 13.625 4.928 14.088C4.513 14.2 4.078 14.26 3.629 14.26C3.306 14.26 2.99 14.229 2.683 14.173C3.324 16.114 5.13 17.538 7.271 17.576C5.577 18.902 3.458 19.695 1.173 19.695C0.777 19.695 0.385 19.673 0 19.628C2.179 21.024 4.767 21.839 7.548 21.839C16.453 21.839 21.318 14.348 21.318 7.772C21.318 7.561 21.314 7.35 21.306 7.141C22.29 6.457 23.161 5.595 23.881 4.616C22.961 5.029 21.981 5.307 20.964 5.434C22.005 4.836 22.812 3.837 23.204 2.667L23.953 4.57Z"/>
                        </svg>
                    </div>
                    <div className="card-content">
                        <h3>Twitter</h3>
                    </div>
                </a>

                <a href="https://calendly.com/sksohel" target="_blank" rel="noopener noreferrer" className="social-card calendly-card hidden">
                    <div className="card-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z"/>
                        </svg>
                    </div>
                    <div className="card-content">
                        <h3>Calendly</h3>
                    </div>
                </a>

                <a href="https://t.me/sksohe_l" target="_blank" rel="noopener noreferrer" className="social-card telegram-card hidden">
                    <div className="card-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.93 1.23-5.45 3.62-.52.36-.99.53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.04-.74 4.09-1.78 6.82-2.96 8.2-3.53 3.9-1.61 4.7-1.89 5.23-1.9.12 0 .37.03.54.17.14.11.18.26.2.37.02.08.04.29.02.45z"/>
                        </svg>
                    </div>
                    <div className="card-content">
                        <h3>Telegram</h3>
                    </div>
                </a>
            </div>

            <div className="shoot-mail-section hidden">
                <div className="mail-content">
                    <h2>SHOOT ME A MAIL</h2>
                    <div className="mail-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                        </svg>
                    </div>
                    <a href="mailto:sohal70760@gmail.com" className="email-link">
                        sohal70760@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
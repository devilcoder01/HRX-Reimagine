import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './collections.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { color } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Collection = () => {
    const scrollRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef([]);

    const categories = [
        "Apparel",
        "Equipment",
        "Watches",
        "Shoes",
        "Eyewear"
    ];

    useEffect(() => {
        VanillaTilt.init(cardsRef.current, {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
        });
        
        gsap.fromTo(headerRef.current, { opacity: 0, y: -50 }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out'
        });

        gsap.fromTo(cardsRef.current, { opacity: 0, y: 50 }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: cardsRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none none',
            }
        });

    }, []);

    const handleArrowClick = () => {
        const scrollElement = scrollRef.current;
        gsap.to(scrollElement, {
            duration: 1,
            scrollTo: { x: '+=400', ease: 'power2.inOut' },
        });
    };

    return (
        <div className="collection-container">
            <div className="colc-cen">
                <div className="collection-header">
                <h2>Product<span style={{ color: "#E85252" }}>'s</span></h2>

                    <button className="arrow-button" onClick={handleArrowClick}>
                        <FontAwesomeIcon icon={faArrowDownLong} size='2x' color='#dadada' rotation={270} />
                    </button>
                </div>
                <hr className="collection-line" />
                <div className="collection-scroll" ref={scrollRef}>
                    <div className="collection-cards">
                        {categories.map((category, index) => (
                            <a
                                href="#"
                                key={index}
                                className={`collection-card clcrd-${index + 1}`}
                                ref={el => cardsRef.current[index] = el}
                            >
                                <div className="card-content">
                                    <h3 className="card-category">{category}</h3>
                                    <button className="explore-button">Explore More</button>
                                    <div className="overlay"></div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;
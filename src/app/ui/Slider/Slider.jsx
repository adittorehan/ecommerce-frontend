'use client';

import { useState, useEffect } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import styles from "./Slider.module.scss";

const images = [
    "/slide-images/image1.jpg",
    "/slide-images/image2.jpg",
    "/slide-images/image3.jpg",
];

const Slider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        // Set up an automatic slideshow cycle
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000); // Change the interval time (in milliseconds) as needed

        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []); // Run the effect only once when the component mounts

    return (
        <div className={styles.container}>            
            <div className={styles.slide} style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img key={index} className={styles.image} src={image} alt={`Slide ${index + 1}`} />
                ))}
            </div>
            <div className={styles.button} onClick={prevSlide}>
                <ChevronLeftIcon />
            </div>
            <div className={styles.button} onClick={nextSlide} style={{ right: 0 }}>
                <ChevronRightIcon />
            </div>
        </div>
    );
};

export default Slider;

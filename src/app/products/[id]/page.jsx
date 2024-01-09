'use client';

import { useState } from "react";
import { Container } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import styles from "./page.module.scss";

const images = [
    "/slide-images/image1.jpg",
    "/slide-images/image2.jpg",
    "/slide-images/image3.jpg",
];

const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div>
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

export default function Product() {
    const [imageToShow, setImageToShow] = useState(null);
    return (
        <div className={styles.container}>
            <Container>
                <div className={styles.main}>
                    <div className={styles.imageContainer} style={{ backgroundImage: imageToShow }}>
                        <div className={styles.imageListContainer}>
                            <ImageSlider />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
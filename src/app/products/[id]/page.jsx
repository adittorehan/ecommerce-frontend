'use client';

import { useEffect, useState } from "react";
import { Container, Button, Typography } from "@mui/material";
import Image from 'next/image';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Rating from '@mui/material/Rating';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import styles from "./page.module.scss";
import { products } from "@/app/lib/data";

const images = [
    "/slide-images/image1.jpg",
    "/slide-images/image2.jpg",
    "/slide-images/image3.jpg",
    "/slide-images/image1.jpg",
    "/slide-images/image2.jpg",
    "/slide-images/image3.jpg",
    "/slide-images/image1.jpg",
    "/slide-images/image2.jpg",
    "/slide-images/image3.jpg",
];

const NumberCounter = () => {
    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber((prevNumber) => prevNumber + 1);
    };

    const decrement = () => {
        setNumber((prevNumber) => prevNumber - 1);
    };

    return (
        <div className={styles.quantityContainer}>
            <span>Quantity: </span>
            <div className={styles.quantity}>
                <Button onClick={decrement} disabled={!Boolean(number)}>-</Button>
                <Typography variant="body1">{number}</Typography>
                <Button onClick={increment}>+</Button>
            </div>

        </div>
    );
};


const Colors = () => {
    const colors = [1, 2, 3, 4];
    return (
        <div className={styles.colorContainer}>
            <span>Color</span>
            <div className={styles.colors}>
                {
                    colors.map(
                        color => (
                            <div className={styles.color}>
                                {color}
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

const Sizes = () => {
    const sizes = [1, 2, 3, 4];
    return (
        <div className={styles.sizeContainer}>
            <span>Size</span>
            <div className={styles.sizes}>
                {
                    sizes.map(
                        size => (
                            <div className={styles.size}>
                                {size}
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}



export default function Product() {
    const [imageIndexToShow, setImageIndexToShow] = useState(0);
    const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [product, setProduct] = useState(null);

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        setProduct({ ...products[0] })
    }, []);

    return (
        <div className={styles.container}>
            <Container>
                <div className={styles.main}>
                    <div className={styles.gallaryContainer}>
                        <div className={styles.imageContainer}>
                            <img
                                className={styles.image}
                                src={hoveredImageIndex ? images[hoveredImageIndex] : images[imageIndexToShow]}
                            />
                        </div>
                        <div className={styles.gallary}>
                            <div className={styles.button} onClick={prevSlide}>
                                <ChevronLeftIcon />
                            </div>
                            <div className={styles.gallaryImages}>
                                {
                                    images.map((_, i) => (
                                        <div style={{
                                            width: 60,
                                            paddingRight: 10,
                                            display: "inline-block"
                                        }}>
                                            <Image
                                                width={50}
                                                height={50}
                                                src={images[i]}
                                                onClick={() => setImageIndexToShow(i)}
                                                onMouseOver={() => setHoveredImageIndex(i)}
                                                onMouseOut={() => setHoveredImageIndex(null)}
                                            />
                                        </div>
                                    ))
                                }

                            </div>
                            <div className={styles.button} onClick={nextSlide} style={{ right: 0 }}>
                                <ChevronRightIcon />
                            </div>
                        </div>
                    </div>

                    <div className={styles.description}>
                        <h2>{product?.name}</h2>
                        <div className={styles.ratingContainer}>
                            {
                                Boolean(product?.ratings) &&
                                <>
                                    <Rating value={product.ratings.stars} max={5} precision={0.1} readOnly className={styles.ratingStar} />
                                    <p>{product.ratings.count} Ratings</p>
                                    | <p>5 Answered Questions</p>
                                </>
                            }
                        </div>
                        <div className={styles.brandContainer}>
                            {
                                !Boolean(product?.brand) &&
                                <>
                                    <p>Brand: No Brand | More Men from No Brand</p>
                                </>
                            }
                        </div>

                        <div className={styles.priceContainer}>
                            {
                                Boolean(product?.price) &&
                                <>
                                    <p>৳ 498</p>
                                    <p>৳ <span style={{ textDecoration: 'line-through' }}>1,650</span> -70%</p>
                                </>
                            }
                        </div>
                        <Colors />
                        <Sizes />
                        <NumberCounter />

                        <div className={styles.actionContainer}>
                            <Button variant="contained" className={styles.buyNowButton}>Buy Now</Button>
                            <Button variant="contained">Add to Cart</Button>
                        </div>

                    </div>

                    <div className={styles.deliveryContainer}>
                        <div className={styles.deliveryHeader}>
                            <span>Delivery</span>
                            <InfoOutlinedIcon size="small"/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
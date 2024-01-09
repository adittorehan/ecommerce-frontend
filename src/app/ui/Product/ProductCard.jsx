import Image from 'next/image';
import Rating from '@mui/material/Rating';

import styles from './ProductCard.module.scss';


export default function ProductCard({ product, onClick }) {

    const calculateDiscount = () => {
        return -45;
    }

    return (
        <div className={styles.container} onClick={onClick}>
            <Image
                src={product.image}
                width={189}
                height={189}
            />
            <div className={styles.descContainer}>
                <div style={{ height: 10 }}></div>
                <p className={styles.title}>{product.name}</p>
                <p className={styles.price}>
                    ৳{product.price}
                </p>

                <div className={styles.priceContainer}>
                    {
                        Boolean(product.old_price) &&
                        <>
                            <span className={styles.oldPrice}>৳{product.old_price}</span>
                            <span className={styles.discount}>{calculateDiscount()}%</span>
                        </>
                    }
                </div>

                <div className={styles.ratingsContainer}>
                    {
                        Boolean(product.ratings) &&
                        <>
                            <Rating value={product.ratings.stars} max={5} precision={0.1} readOnly className={styles.ratingStar} />
                            <span className={styles.ratingCount}>({product.ratings.count})</span>
                        </>
                    }
                </div>

            </div>
        </div>
    )
}
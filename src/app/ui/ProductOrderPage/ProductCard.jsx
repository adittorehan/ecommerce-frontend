import styles from './ProductCard.module.scss';

export default function ProductCard() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img
                    className={styles.image}
                    src="/products/product11.webp"
                    alt="product image"
                />
            </div>
            <div className={styles.title}>
                Sneakers Converse shoes for man plain pull on design italiana check fabrical shoes black blue windproof rubber sool s - Loafer For Men - lotto shoes for men
            </div>
            <div className={styles.price}>
                ৳ 311
            </div>
        </div>
    )
}
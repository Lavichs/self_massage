import React from 'react';
import styles from "../styles/productCard.module.css";

const ProductCard = ({image, price, title}) => {
    return (
        <div className={styles.card}>
            <div className={styles.product}>
                <img src={image} alt=""/>
                <h2>{price} ₽</h2>
                <h3>{title}</h3>
            </div>
            <div className={styles.buttonBlock}>
                <a className={styles.buy} href="#">Купить</a>
            </div>
        </div>
    );
};

export default ProductCard;
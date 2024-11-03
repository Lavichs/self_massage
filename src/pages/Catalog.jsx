import React from 'react';
import styles from '../styles/catalog.module.css'
import ProductCard from "../Components/ProductCard";

const Catalog = () => {
    const products = [
        {
            "title": "Массажер \"Мурашка\" для головы",
            "price": "259",
            "image": require('../../resource/products/6036882203.jpg'),
        },
        {
            "title": "Массажный пистолет Xiaomi Massage Gun",
            "price": "10 999",
            "image": require('../../resource/products/pistole.jpg'),
        },
        {
            "title": "Массажер роликовый для лица и тела",
            "price": "484",
            "image": require('../../resource/products/rolik.jpg'),
        },
        {
            "title": "Массажный коврик",
            "price": "1 404",
            "image": require('../../resource/products/kover.jpg'),
        },
        {
            "title": "PLANTA Турмалиново-нефритовый тепловой коврик",
            "price": "9 960",
            "image": require('../../resource/products/vanna.jpg'),
        },
        {
            "title": "Массажная ванночка для ног",
            "price": "5 540",
            "image": require('../../resource/products/turm-kov.jpg'),
        },
        {
            "title": "Подушка массажная с лузгой гречихи",
            "price": "733",
            "image": require('../../resource/products/grechka.png'),
        },
        {
            "title": "Массажер для ног Yamaguchi Hybrid",
            "price": "24 500",
            "image": require('../../resource/products/nogi.jpg'),
        },
        {
            "title": "Мусс для рук Тайский Лемонграсс (75 мл.)",
            "price": "500",
            "image": require('../../resource/products/muss.jpg'),
        },
        {
            "title": "Лосьон для тела Лотос",
            "price": "1 070",
            "image": require('../../resource/products/lotos.jpg'),
        },
    ]
    return (
        <>
            <div className={styles.catalog}>
                {products.map(product =>
                    <ProductCard kry={product.title}
                                 title={product.title}
                                 price={product.price}
                                 image={product.image}/>
                )}
            </div>
        </>
    );
};

export default Catalog;
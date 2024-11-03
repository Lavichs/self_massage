import React from 'react';
import {useParams} from "react-router-dom";
import {articles} from "../consts/articles";
import styles from '../styles/articles.module.css'

const Articles = () => {
    const {id} = useParams();
    const article = articles.find(a => a.id === id);

    if (!article) {
        return <h2>Статья не найдена</h2>;
    }

    return (
        <div className={styles.art}>
            <h2>{article.title}</h2>
            <h3>Почему это важно?</h3>
            <p>{article.why}</p>
            <h3>Как выполнить:</h3>
            <ol>
                <li>{article.how_1}</li>
                <li>{article.how_2}</li>
                <li>{article.how_3}</li>
                <li>{article.how_4}</li>
            </ol>
            <h3>Польза:</h3>
            <p>{article.benefit}</p>
        </div>
    );
};

export default Articles;
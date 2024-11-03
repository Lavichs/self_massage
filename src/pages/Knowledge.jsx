import React from 'react';
import {Link} from "react-router-dom";
import styles from '../styles/knowledge.module.css'
import {ARTICLE_BASE, TOFFEL_COURSE_PAGE} from "../consts/routes";

const Knowledge = () => {
    return (
        <section className={styles.list}>
            <h1>Упражнения</h1>
            <h3>Массаж для снятия напряжения</h3>
            <Link className={styles.link} to={ARTICLE_BASE + '/neck'}>
                <p>Массаж шеи</p>
            </Link>
            <Link className={styles.link} to={ARTICLE_BASE + '/shoulders'}>
                <p>Массаж плеч</p>
            </Link>
            <h3>Массаж для расслабления и улучшения циркуляции</h3>
            <Link className={styles.link} to={ARTICLE_BASE + '/hands'}>
                <p>Массаж рук</p>
            </Link>
            <Link className={styles.link} to={ARTICLE_BASE + '/legs'}>
                <p>Массаж лица</p>
            </Link>
            <h3>Специальные</h3>
            <Link className={styles.link} to={TOFFEL_COURSE_PAGE}>
                <p>Курс Тоффеля</p>
            </Link>
        </section>
    );
};

export default Knowledge;
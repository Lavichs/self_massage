import React from 'react';
import {Link} from "react-router-dom";
import styles from '../styles/main.module.css'
import {ARTICLE_BASE, TOFFEL_COURSE_PAGE} from "../consts/routes";

const Main = () => {
    return (
        <div>
            <section className={styles.hero}>
                <h1>Добро пожаловать в мир самомассажа!</h1>
                <p>Откройте для себя полезные техники самомассажа для улучшения самочувствия и расслабления</p>
            </section>
            <section className={styles.techniques}>
                <h2>Популярные статьи за прошлый месяц</h2>
                <article className={styles.glowOnHover}>
                    <Link className={styles.techniquesLink} to={TOFFEL_COURSE_PAGE}>
                        <h3>Курс Тоффеля</h3>
                    </Link>
                    <p>Тоффель создал курс для приведения организма к идеалу. Данный курс позволяет качественно улучшить
                        организм человека: он дает почти полный иммунитет к болезням, более прочные кости, сила и
                        реакция выше, чем у обычных людей. Ну и по мелочи много разного. В данной статье будут
                        рассмотрены история, особенности и общие оценки стоимости.</p>
                </article>
                <article>
                    <Link className={styles.techniquesLink} to={ARTICLE_BASE + '/hands'}>
                        <h3>Массаж рук</h3>
                    </Link>
                    <p>Руки часто испытывают значительное напряжение, особенно у тех, кто много печатает или выполняет
                        монотонную работу. Массаж рук помогает снять усталость. ✋</p>
                </article>
                <article>
                    <Link className={styles.techniquesLink} to={ARTICLE_BASE + '/neck'}>
                        <h3>Массаж шеи</h3>
                    </Link>
                    <p>Шея – это область, где часто накапливаются напряжение и стресс. Массаж шеи помогает расслабить
                        мышцы, улучшить кровообращение и снять головные боли.</p>
                </article>
            </section>
        </div>
    );
};

export default Main;
import React, {useEffect, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import './styles/app.css'
import styles from "./styles/header.module.css";
import Menu from "./Components/Menu";
import Catalog from "./pages/Catalog";
import {
    ABOUT_PAGE,
    ARTICLE_BASE,
    CATALOG_PAGE,
    CONTACTS_PAGE,
    KNOWLEDGE_PAGE, LOGIN_PAGE,
    MAIN_PAGE,
    NOTFOUND_PAGE, TOFFEL_COURSE_PAGE
} from "./consts/routes";
import Knowledge from "./pages/Knowledge";
import Contacts from "./pages/Contacts";
import Articles from "./pages/Articles";
import ScrollToTop from "./Components/ScrollToTop";
import ToffelCourse from "./pages/ToffelCourse";
import Authorization from "./pages/Authorization";


const App = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        setScrolled(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Удаляем обработчик события при размонтировании
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <header className={scrolled ? [styles.scrolled, styles.header].join(' ') : styles.header}>
                <nav className={styles.nav}>
                    <Link className={styles.logo} to="/">
                        <h1 style={scrolled ? {color: "#CCCCCC"} : {color: "black"}} className={styles.logoText}>Alva</h1>
                    </Link>
                    <Menu/>
                </nav>
            </header>
            <ScrollToTop />
            <div className="content">
                <Routes>
                    <Route path={MAIN_PAGE} element={<Main/>}/>
                    <Route path={ABOUT_PAGE} element={<About/>}/>
                    <Route path={CATALOG_PAGE} element={<Catalog/>}/>
                    <Route path={KNOWLEDGE_PAGE} element={<Knowledge/>}/>
                    <Route path={CONTACTS_PAGE} element={<Contacts/>}/>
                    <Route path={ARTICLE_BASE + '/:id'} element={<Articles/>} />
                    <Route path={TOFFEL_COURSE_PAGE} element={<ToffelCourse/>} />
                    <Route path={LOGIN_PAGE} element={<Authorization/>} />
                    <Route path={NOTFOUND_PAGE} element={<NotFound/>}/>
                </Routes>
            </div>
            <footer>
                <p>&copy; 2024 Техники самомассажа "Alva". Все права защищены. Лицензия MIT</p>
            </footer>
        </div>
    );
};

export default App;
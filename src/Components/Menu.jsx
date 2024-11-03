import React from 'react';
import {Link, useLocation} from "react-router-dom";
import '../styles/menu.css'
import {
    ABOUT_PAGE,
    ARTICLE_BASE,
    CATALOG_PAGE,
    CONTACTS_PAGE,
    KNOWLEDGE_PAGE, LOGIN_PAGE,
    MAIN_PAGE,
    TOFFEL_COURSE_PAGE
} from "../consts/routes";

const Menu = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const lastSegment = '/' + pathSegments[pathSegments.length - 1];

    const baseLink = "menuLink"
    const active = "menuLink menu_link_active"

    return (
        <>
            <input className="sideMenu" type="checkbox" id="side-menu"/>
            <label className="hamb" htmlFor="side-menu"><span className="hambLine"></span></label>
            <ul className="menu">
                <li><Link className={lastSegment === MAIN_PAGE ? active : baseLink}
                          to={MAIN_PAGE}
                >Главная</Link></li>
                <li><Link className={lastSegment === CATALOG_PAGE ? active : baseLink}
                          to={CATALOG_PAGE}
                >Каталог</Link></li>
                <li><Link className={
                    (
                        (lastSegment === KNOWLEDGE_PAGE) ||
                        (('/' + location.pathname.split('/')[1]) === ARTICLE_BASE)) ||
                        (('/' + location.pathname.split('/')[1]) === TOFFEL_COURSE_PAGE)
                        ? active : baseLink
                }
                          to={KNOWLEDGE_PAGE}
                >База знаний</Link></li>
                <li><Link className={lastSegment === CONTACTS_PAGE ? active : baseLink}
                          to={CONTACTS_PAGE}
                >Контакты</Link></li>
                <li><Link className={lastSegment === ABOUT_PAGE ? active : baseLink}
                          to={ABOUT_PAGE}
                >О нас</Link></li>
                <li><Link className='authLink' to={LOGIN_PAGE}
                >Войти</Link></li>
            </ul>
        </>
    );
};

export default Menu;
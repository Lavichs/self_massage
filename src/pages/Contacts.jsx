import React from 'react';
import styles from '../styles/contacts.module.css'
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

const Contacts = () => {
    return (
        <>
            <div className={styles.contacts}>
                <h2 className={styles.contactsTitle}>Контакты</h2>
                <p>Адрес: 460026 г.Оренбург, ул.Одесская,148</p>
                <p>Телефон: 8 800 555 3535</p>
                <p>Разработчик: студент группы 21ИСП-2 Шурыгин Илья</p>
                <ul className={styles.socialIcons}>
                    <li><a className={styles.socialIconVk} href="https://vk.com/id337966408"
                           title="Официальная страница разработчика в ВКонтакте" target="_blank" rel="noopener"></a></li>
                    <li><a className={styles.socialIconTelegram} href="https://t.me/alalvares"
                           title="Официальная страница разработчика в Telegram" target="_blank" rel="noopener"></a></li>
                    <li><a className={styles.socialIconYoutube} href="https://youtube.com/"
                           title="Главная страница YouTube"
                           target="_blank" rel="noopener"></a></li>
                </ul>
            </div>
            <YMaps>
                <Map width={900} height={500} defaultState={{ center: [51.795761, 55.142398], zoom: 18 }}>
                    <Placemark defaultGeometry={[51.795761, 55.142398]} />
                </Map>
            </YMaps>
        </>
    );
};

export default Contacts;
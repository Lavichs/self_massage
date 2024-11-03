import React from 'react';
import styles from '../styles/auth.module.css'

const Authorization = () => {
    return (
        <>
            <form>
            {/*    <div className="imgcontainer">*/}
            {/*        /!*<img src={require('../../resource/img_avatar2.png')} alt="Аватар" className="avatar"/>*!/*/}
            {/*    </div>*/}

                <div className={styles.container}>
                    <label htmlFor="uname"><b>Пользователь</b></label>
                    <input type="text" placeholder="Введите имя" name="uname" required/>

                    <label htmlFor="psw"><b>Пароль</b></label>
                    <input type="password" placeholder="Введите пароль" name="psw" required/>

                    <button type="submit">Вход</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"/> Запомнить меня
                    </label>
                </div>

                <div className={styles.container} style={{backgroundColor: '#f1f1f1'}}>
                    <button type="button" className={styles.cancelbtn}>Отменить</button>
                    <span className={styles.psw}>Забыли <a href="#">пароль?</a></span>
                </div>
            </form>
        </>
    );
};

export default Authorization;
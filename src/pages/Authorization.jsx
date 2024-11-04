import React, {useState} from 'react';
import styles from '../styles/auth.module.css'

const Authorization = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const auth = (event) => {
        alert(`${name}, ${pass}`)
        event.stopPropagation();
        event.preventDefault();
    }

    return (
        <>
            <form onSubmit={auth}>
                <div className={styles.imgcontainer}>
                    <img src={require('../../resource/img_avatar_men.png')} alt="Аватар" className={styles.avatar}/>
                </div>

                <div className={styles.container}>
                    <label htmlFor="uname"><b>Пользователь</b></label>
                    <input onChange={e => setName(e.target.value)} type="text" placeholder="Введите имя" name="uname" required/>

                    <label htmlFor="psw"><b>Пароль</b></label>
                    <input onChange={e => setPass(e.target.value)} type="password" placeholder="Введите пароль" name="psw" required/>

                    <button type="submit">Вход</button>
                    <label>
                        <input type="checkbox" name="remember"/> Запомнить меня
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
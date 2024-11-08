import React, {useState} from 'react';
import styles from '../styles/auth.module.css'

const Authorization = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы

        const response = await fetch('http://216.173.69.252:9000/task2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                username: username,
                password: password,
            }),
        });

        const data = await response.json();

        // Выводим ответ в alert
        alert(data.message);
    };

    const auth = (event) => {
        alert(`${username}, ${password}`)
        event.stopPropagation();
        event.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={styles.imgcontainer}>
                    <img src={require('../../resource/img_avatar_men.png')} alt="Аватар" className={styles.avatar}/>
                </div>

                <div className={styles.container}>
                    <label htmlFor="uname"><b>Пользователь</b></label>
                    <input
                        onChange={e => setUsername(e.target.value)}
                        type="text"
                        placeholder="Введите имя"
                        name="uname"
                        required/>

                    <label htmlFor="psw"><b>Пароль</b></label>
                    <input
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder="Введите пароль"
                        name="psw"
                        required/>

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
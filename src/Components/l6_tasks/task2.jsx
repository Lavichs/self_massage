import React, {useState} from 'react';
import styles from "../../styles/auth.module.css";
import {BACKEND_API_URL} from "../../consts/env";

const Task2 = () => {
    const [mas1, setMas1] = useState('');
    const [mas2, setMas2] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы

        const response = await fetch(BACKEND_API_URL + '/task3', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                mas1: mas1,
                mas2: mas2,
            }),
        });

        const data = await response.json();

        // Выводим ответ в alert
        alert(data.status);
        alert('Массив 1' + data.uniqueToArray1);
        alert('Массив 2' + data.uniqueToArray2);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={styles.container}>
                    <input
                        onChange={e => setMas1(e.target.value)}
                        type="text"
                        placeholder="Введите массив 1 (в виде: [1, 2, 3, ...])"
                        name="uname"
                        required/>

                    <label htmlFor="psw"><b>Пароль</b></label>
                    <input
                        onChange={e => setMas2(e.target.value)}
                        type="text"
                        placeholder="Введите массив 2 (в виде: [1, 2, 3, ...])"
                        name="psw"
                        required/>

                    <button type="submit">Сверить</button>
                </div>
            </form>
        </>
    );
};

export default Task2;
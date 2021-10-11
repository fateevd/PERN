import React, {useState} from 'react';
import MyInput from "../../UiComponent/MyInput/MyInput";
import MyButton from "../../UiComponent/Button/MyButton";
import {addTodoreqest} from "../../http/todo-response";
import style from "./Form.module.scss";


const Form = ({userId, checkTodo}) => {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        if (!title || !description) {
            setTitle("");
            setDescription('');
           return  alert("Заполните указанные поля");
        }
        addTodoreqest(title, description, userId);
        setTitle("");
        setDescription('');
        checkTodo();
    }

    return (
        <form className={style.form}>
            <MyInput placeholder="Ввидете Заголовок" className={style.form__input} value={title} onChange={event => setTitle(event.target.value)}/>
            <MyInput placeholder="Ввидете Описание" className={style.form__input} value={description} onChange={event => setDescription(event.target.value)}/>
            <MyButton className={style.form__button} onClick={e => addTodo(e)}>Добавить запись</MyButton>
        </form>
    );
};

export default Form;
import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {responseCurrentTodo, updateCurrentTodo} from "../../http/todo-response";
import MyButton from "../../UiComponent/Button/MyButton";
import MyInput from "../../UiComponent/MyInput/MyInput";
import style from "./CurrentTodo.module.scss";

const CurrentPage = () => {

    const [input, setInput] = useState('');
    const [description, setDescription] = useState('');
    const {id} = useParams();
    const back = useHistory();
    useEffect(() => {
        responseCurrentTodo(id)
            .then(data => {
                return setInput(data.title), setDescription(data.description)
            });
    }, []);

    const updateTodo = () => {

        updateCurrentTodo(input, description, id)
            .then(data => alert(data));
    }
    return (
        <div className={style.inner}>
            <MyButton onClick={() => back.goBack()}>Назад</MyButton>
            <h3>Заголовок действия</h3>
            <MyInput className={style.current__input} type="text" value={input}
                     onChange={event => setInput(event.target.value)}/>
            <h3>Само действие</h3>
            <MyInput className={style.current__input} type="text" value={description}
                     onChange={event => setDescription(event.target.value)}/>
            <MyButton onClick={() => updateTodo()}>Подтвердить изменения</MyButton>
        </div>

    );
};

export default CurrentPage;
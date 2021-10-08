import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {responseCurrentTodo} from "../../http/todo-response";
import MyButton from "../../UiComponent/Button/MyButton";

const CurrentPage = () => {

    const [todo, setTodo] = useState([]);
    const {id} = useParams();
    const {title, description} = todo;
    const back = useHistory();

    useEffect(() => {
        responseCurrentTodo(id).then(data => setTodo(data));
    }, []);

    return (
        <div>
            <MyButton onClick={() => back.goBack()}>Назад</MyButton>
            <h1>{title}</h1>
            <h3>{description}</h3>
        </div>

    );
};

export default CurrentPage;
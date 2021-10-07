import React, {useEffect, useState} from 'react';
import {deleteTodo, responseTodo} from "../../http/todo-response";
import jwt_decode from "jwt-decode";
import {useHistory} from "react-router-dom";
import style from "./Todo.module.scss";
import classname from "classname";
import MyButton from "../../UiComponent/Button/MyButton";

const Todo = () => {


    const [todo, setTodo] = useState([]);
    let message;
    const token = jwt_decode(localStorage.getItem("token"));
    const {id} = token;
    const history = useHistory();


    const chekTodo = () => {
        responseTodo(id)
            .then(data => setTodo(data));
    }


    useEffect(() => {
        chekTodo();
    }, [todo]);

    const detel = (event, id) => {
        event.stopPropagation();
        deleteTodo(id)
            .then(result => alert(result.data))
    }

    return (
        <div className="todo">
            {
                todo.map(({id, title, description}, index) =>
                    <div className={style.todo__current} key={id} onClick={() => history.push(`todo/${id}`)}>
                        <span className={classname(style.todo__id, style.span)}>{index + 1}</span>
                        <div className={classname(style.todo__description)}>
                            <h3 className={classname(style.todo__title, style.span)}>{title}</h3>
                            <p className={classname(style.span)}>{description}</p>
                        </div>
                        <MyButton className={classname(style.todo__button)}
                                  onClick={(event) => detel(event, id)}>Удалить</MyButton>
                    < /div>
                )
            }
        </div>


    );
};

export default Todo;
import React, {useEffect, useState} from 'react';
import {deleteTodo, onToggleTodo, responseTodo} from "../../http/todo-response";
import jwt_decode from "jwt-decode";
import {useHistory} from "react-router-dom";
import style from "./Todo.module.scss";
import classname from "classname";
import MyButton from "../../UiComponent/Button/MyButton";

const Todo = () => {


    const [todo, setTodo] = useState([]);

    const token = jwt_decode(localStorage.getItem("token"));
    const userId = token.id;
    const history = useHistory();


    const chekTodo = () => {
        responseTodo(userId)
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

    const onToggle = (event, id) => {
        event.stopPropagation();
         todo.map(item => {
                 if (item.id === id) {
                     item.completed = !item.completed;
                     onToggleTodo(id,item.completed,userId).then(() => chekTodo());
                 }

             }
         )
    }

    return (
        <div className="todo">
            {
                todo.map(({id, title, description, completed}, index) =>
                    <div className={style.todo__current} key={id} onClick={() => history.push(`todo/${id}`)}>
                        <span className={classname(style.todo__id, style.span)}>{index + 1}</span>
                        <div className={classname(style.todo__checkbox_block)}>
                            <input type="checkbox" checked={completed} onClick={(event => event.stopPropagation())}  onChange={event => onToggle(event,id)}/>

                            <div className={classname(style.todo__description)}>
                                <h3 className={classname(style.todo__title, style.span)}>{title}</h3>
                                <p className={classname(style.span)}>{description}</p>
                            </div>
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
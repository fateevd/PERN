import React, {useEffect, useState} from 'react';
import {responseTodo} from "../../http/todo-response";
import jwt_decode from "jwt-decode";
import {useHistory} from "react-router-dom";

const Todo = () => {

    const [todo, setTodo] = useState([]);
    const token = jwt_decode(localStorage.getItem("token"));
    const {id} = token;
    const history = useHistory();

    useEffect(() => {
        responseTodo(id)
            .then(data => setTodo(data));
    }, []);

    return (
        <div>
            {
                todo.map(({id, title, description}, index) =>
                    <div key={id} onClick={() => history.push(`todo/${id}`)}>
                        <span>{index + 1}</span>
                        <span>{title}</span>
                        <span>{description}</span>
                    < /div>
                )
            }
        </div>


    );
};

export default Todo;
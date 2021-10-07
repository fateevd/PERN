import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {responseCurrentTodo} from "../../http/todo-response";

const CurrentPage = () => {
    const [todo, setTodo] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        responseCurrentTodo(id).then(data => setTodo(data));
    }, []);
    return (
        <div>
            {todo.title},{todo.description}
        </div>

    );
};

export default CurrentPage;
import {$host} from "./index";


export const responseTodo = async userId => {
    const {data} = await $host.get(`/todo/todos/?userId=${userId}`)
    return data;
}


export const responseCurrentTodo = async id => {
    const {data} = await $host.get("/todo/" + id);
    return data;
}
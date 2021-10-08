import {$host} from "./index";


export const responseTodo = async userId => {
    const {data} = await $host.get(`/todo/todos/?userId=${userId}`)
    return data;
}


export const responseCurrentTodo = async id => {
    const {data} = await $host.get("/todo/" + id);
    return data;
}


export const deleteTodo = async id => {
    const data = await $host.delete("/todo/" + id);
    return data;
}


export const onToggleTodo = async (id, completed, userId) => {
    const data = await $host.put(`/todo/complete/?id=${id}&completed=${completed}&userId=${userId}`)
    return data;
}
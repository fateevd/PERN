import {$host} from "./index";

export const registration = async (email:string, password:string) => {
    const {data} = await $host.post("/user/registration", {email, password});
    return data;
}

export const responseTodo = async (userId: number) => {
    const {data} = await $host.get(`todo/todos/?userId=${userId}`)
    return data;
}


export const onToggleTodo = async (id: number, completed: boolean, userId: number) => {
    const data = await $host.put(`todo/complete/?id=${id}&completed=${completed}&userId=${userId}`)
    return data;
}
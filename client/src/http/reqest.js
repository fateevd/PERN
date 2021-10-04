import {$host} from "./index";


export const  registration = async (email, password) => {
    const {data} = await $host.post("/user/registration" , {email, password});
    return data;
}
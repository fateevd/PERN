import {$host, $hostAuth} from "./index";
import jwt_decode from "jwt-decode";

export const  registration = async (email, password) => {
    const {data} = await $host.post("/user/registration" , {email, password});
    localStorage.setItem("token", data);
    return jwt_decode(data);
}


export const  login = async (email, password) => {
    const {data} = await $host.post("/user/login" , {email, password});
    localStorage.setItem("token", data);
    return jwt_decode(data);
}

export const check = async () => {
    const {data} = await $hostAuth.get("/user/auth");
    localStorage.setItem("token", data.token);
    return jwt_decode(data.token);
}
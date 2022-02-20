import axios from 'axios';
// import {HOST} from 'react-native-dotenv';
export const $host = axios.create({
    baseURL: 'http://192.168.1.4:5000/api/',
});


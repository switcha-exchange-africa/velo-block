import axios from 'axios';
import { useEffect } from 'react';
import endpoints from '../constants/endpoints';



const Axios = axios.create({
    baseURL: endpoints.BASE_URL,
    headers: typeof window != 'undefined' && (localStorage.getItem('token')) ? { Authorization: `Bearer ${localStorage.getItem('token')}` }  : { 'Content-type': 'application/json' }
});

export default Axios;
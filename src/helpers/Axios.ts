import axios from 'axios';
import endpoints from '../constants/endpoints';



const Axios = axios.create({
    baseURL: endpoints.BASE_URL,
    headers: typeof window != 'undefined' && !(localStorage.getItem('token')) ? { 'Content-type': 'application/json' }  : { Authorization: `${typeof window != 'undefined' && localStorage.getItem('token')}` } 
});

export default Axios;
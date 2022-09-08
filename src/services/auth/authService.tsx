import endpoints from "../../constants/endpoints";
import Axios from "../../helpers/Axios";
import { CreateAccountRequest } from "../../interfaces/auth/CreateAccountRequest";
import { LoginRequest } from "../../interfaces/auth/LoginRequest";

const createAccount = async (data: CreateAccountRequest) => {
    const response = await Axios.post(`${endpoints.REGISTER_URL}`, data);
    return response.data;
}
const login = async (data: LoginRequest) => {
    const response = await Axios.post(`${endpoints.LOGIN_URL}`, data);
    return response.data;
}
const getUser = async () => {
    const response = await Axios.get(`${endpoints.GET_USER_URL}`);
    return response.data;
}

const authService = { createAccount, login, getUser }

export default authService

import endpoints from "../../constants/endpoints";
import Axios from "../../helpers/Axios";
import { CreateAccountRequest } from "../../interfaces/auth/CreateAccountRequest";
import { LoginRequest } from "../../interfaces/auth/LoginRequest";

const createAccount = async (data: CreateAccountRequest) => {
    console.log(data)
    const response = await Axios.post(`${endpoints.REGISTER_URL}`, data);

    return response.data;
}
const login = async (data: LoginRequest) => {
    const response = await Axios.post(`${endpoints.LOGIN_URL}`, data);
    return response.data;
}

const sendOtp = async () => {
    const response = await Axios.get(`${endpoints.RESEND_VERIFY_EMAIL_URL}`,);
    return response.data;
}

const verifyOtp = async (pin: string) => {
    const response = await Axios.post(`${endpoints.VERIFY_EMAIL_URL}`, { code: pin });
    return response.data;
}
const getUser = async () => {
    const response = await Axios.get(`${endpoints.GET_USER_URL}`);
    return response.data;
}

const authService = { createAccount, login, sendOtp, verifyOtp, getUser }

export default authService

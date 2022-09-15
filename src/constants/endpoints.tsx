//--------these are just test URLs---------
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const LOGIN_URL = 'auth/login'
const REGISTER_URL = 'auth/signup'
const RESEND_VERIFY_EMAIL_URL = 'auth/verify-email'
const VERIFY_EMAIL_URL = 'auth/verify-email'
const GET_USER_URL = 'get-user'

const endpoints = { BASE_URL, LOGIN_URL, REGISTER_URL, GET_USER_URL, VERIFY_EMAIL_URL, RESEND_VERIFY_EMAIL_URL }

export default endpoints;
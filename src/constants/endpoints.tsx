//--------these are just test URLs---------
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const LOGIN_URL = "auth/login";
const REGISTER_URL = "auth/signup";
const RESEND_VERIFY_EMAIL_URL = "auth/verify-email";
const VERIFY_EMAIL_URL = "auth/verify-email";
const GET_USER_URL = "get-user";
const BUY_CRYPTO_UrL = "trade/buy";
const SELL_CRYPTO_URL = "trade/sell";
const GET_SINGLE_RATE_URL = "rates/single?";

const endpoints = {
  BASE_URL,
  LOGIN_URL,
  REGISTER_URL,
  GET_USER_URL,
  VERIFY_EMAIL_URL,
  RESEND_VERIFY_EMAIL_URL,
  BUY_CRYPTO_UrL,
  SELL_CRYPTO_URL,
  GET_SINGLE_RATE_URL,
};

export default endpoints;

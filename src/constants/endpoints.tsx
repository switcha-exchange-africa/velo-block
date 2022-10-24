//--------these are just test URLs---------
const BASE_URL = process.env.NEXT_PUBLIC_API_ENDPOINT + "/api/v1/";
const LOGIN_URL = "auth/login";
const REGISTER_URL = "auth/signup";
const RESEND_VERIFY_EMAIL_URL = "auth/verify-email";
const VERIFY_EMAIL_URL = "auth/verify-email";
const GET_USER_URL = "auth";

const GET_WALLET_URL = "wallet";
const GET_SINGLE_RATE_BY_PAIR_URL = "exchange-rates/rate/pair";
const CONVERT_URL = "exchange-rates/rate/convert";
const CALCULATE_TRADE_FEES_URL = "fees/trade"
const GET_COINS_URL = "coins"
const GET_SINGLE_COIN_URL = "coins/"
const BUY_CRYPTO_UrL = "trade/buy";
const SELL_CRYPTO_URL = "trade/sell";
const SWAP_CRYPTO_URL = "trade/swap";
const QUICK_TRADE_URL = "trade/quick-trade"


const endpoints = {
  BASE_URL,
  LOGIN_URL,
  REGISTER_URL,
  GET_USER_URL,
  VERIFY_EMAIL_URL,
  RESEND_VERIFY_EMAIL_URL,
  BUY_CRYPTO_UrL,
  SELL_CRYPTO_URL,
  GET_WALLET_URL,
  GET_SINGLE_RATE_BY_PAIR_URL,
  CONVERT_URL,
  CALCULATE_TRADE_FEES_URL,
  GET_COINS_URL,
  GET_SINGLE_COIN_URL,
  SWAP_CRYPTO_URL,
  QUICK_TRADE_URL
};

export default endpoints;

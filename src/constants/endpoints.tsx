//--------these are just test URLs---------
const BASE_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;
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
const GET_SINGLE_ORDER = "p2p/order/"

const QUICK_TRADE_URL = "trade/quick-trade"
const GET_EXCHANGE_URL = "rates/markets?base=USD";
const P2P_ADS = "p2p/ads"
const P2P_BUY_ADS_URL = "p2p/ads?type=sell&coin"
const P2P_SELL_ADS_URL = "p2p/ads?type=buy&coin"
const GET_NIGERIAN_BANKS = "bank/default/nigerian-banks"
const ADD_BANK = "bank"

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
  QUICK_TRADE_URL,
  GET_SINGLE_ORDER,
  GET_EXCHANGE_URL,
  P2P_ADS,
  P2P_BUY_ADS_URL,
  P2P_SELL_ADS_URL,
  GET_NIGERIAN_BANKS,
  ADD_BANK
};

export default endpoints;

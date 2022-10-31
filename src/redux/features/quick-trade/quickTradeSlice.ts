import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface QuickTradeState {
  amount?: any;
  creditCoinAmount?: any;
  fee?: any;
  cash?: any;
  coin?: any;
  rate?: any;
  orderId?: any;
}
const initialState: QuickTradeState = {
  amount: null,
  creditCoinAmount: null,
  fee: null,
  cash: null,
  coin: null,
  rate: null,
  orderId: null,
};

export const quickTradeSlice = createSlice({
  name: "quickTrade",
  initialState,
  reducers: {
    setQuickBuyPayload: (
      state,
      {
        payload: { amount, creditCoinAmount, fee, cash, coin, rate },
      }: PayloadAction<{
        amount: any;
        creditCoinAmount: any;
        fee: any;
        cash: any;
        coin: any;
        rate: any;
      }>
    ) => {
      state.amount = amount;
      state.creditCoinAmount = creditCoinAmount;
      state.fee = fee;
      state.cash = cash;
      state.coin = coin;
      state.rate = rate;
    },

    setOrderIdPayload: (
      state,
      {
        payload: { orderId },
      }: PayloadAction<{
        orderId: any;
      }>
    ) => {
      state.orderId = orderId;
    },
  },
});

export const { setQuickBuyPayload, setOrderIdPayload } =
  quickTradeSlice.actions;

export default quickTradeSlice.reducer;

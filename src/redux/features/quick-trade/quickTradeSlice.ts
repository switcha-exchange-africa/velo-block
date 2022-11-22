import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface QuickTradeState {
  amount?: any;
  creditCoinAmount?: any;
  fee?: any;
  cash?: any;
  coin?: any;
  rate?: any;
  order?: any;
  isModalOpen?: any;
  isClientSelected: boolean
}
const initialState: QuickTradeState = {
  amount: null,
  creditCoinAmount: null,
  fee: null,
  cash: null,
  coin: null,
  rate: null,
  order: null,
  isModalOpen: false,
  isClientSelected: true
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

    setOrderPayload: (
      state,
      {
        payload: { order },
      }: PayloadAction<{
        order: any;
      }>
    ) => {
      state.order = order;
    },

    resetQuickTradePayload: (state) => {
      state.amount = null;
      state.creditCoinAmount = null;
      state.fee = null;
      state.cash = null;
      state.coin = null;
      state.rate = null;
    },

    setIsModalOpen: (
      state,
      {
        payload: { isOpen },
      }: PayloadAction<{
        isOpen: any;
      }>
    ) => {
      state.isModalOpen = isOpen;
    },
    setCoinOrCash: (
      state,
      {
        payload: { fromWallet },
      }: PayloadAction<{
        fromWallet: any;
      }>
    ) => {
      if (fromWallet != "NGN") {
        state.cash = "NGN";
        state.coin = fromWallet;
      } else {
        state.cash = fromWallet;
      }
    },

    setIsClientSelected: (
      state,
      {
        payload: { isClientSelected },
      }: PayloadAction<{
        isClientSelected: any;
      }>
    ) => {
      state.isClientSelected = isClientSelected;
    },
  },
});

export const {
  setQuickBuyPayload,
  setOrderPayload,
  resetQuickTradePayload,
  setIsModalOpen,
  setCoinOrCash,
  setIsClientSelected
} = quickTradeSlice.actions;

export default quickTradeSlice.reducer;

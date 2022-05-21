import { combineReducers } from "redux";
import { conversionReducer } from "./requests/reducer";
import { swapReducer } from "./swap/reducer";
import { accountReducer } from "./sigup/reducer";

export const rootReducer = combineReducers({
   requestState: conversionReducer,
   swapState: swapReducer,
   accountState: accountReducer
   
});
import { combineReducers } from "redux";
import { conversionReducer } from "./requests/reducer";
import { swapReducer } from "./swap/reducer";

export const rootReducer = combineReducers({
   requestState: conversionReducer,
   swapState: swapReducer
   
});
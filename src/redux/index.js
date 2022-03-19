import { combineReducers } from "redux";
import { conversionReducer } from "./requests/reducer";

export const rootReducer = combineReducers({
   requestState: conversionReducer
   
});
import { combineReducers } from "redux";
import account from "@account/reducer";
import cards from "@cards/reducer";

const reducer = combineReducers({ account, cards });

export default reducer;

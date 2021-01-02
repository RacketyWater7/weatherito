import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import searchedReducer from "./searchedReducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
  searched: searchedReducer,
});

export default rootReducer;

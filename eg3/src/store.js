import { legacy_createStore } from "redux";
import CounterReducer from "./reducers/CounterReducer";
//store is responsible for combining reducer and middleware
const store =legacy_createStore(CounterReducer)
export default store
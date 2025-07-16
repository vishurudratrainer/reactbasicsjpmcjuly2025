import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import CounterReducer from "./reducers/CounterReducer";
import TodosReducer from "./reducers/TodosReducer";
import apiMiddlware from "./middlewares/apiMiddleware";
//store is responsible for combining reducer and middleware
const store = legacy_createStore(
  combineReducers({counter:CounterReducer, todos:TodosReducer}),
  applyMiddleware(apiMiddlware)
);
export default store;

import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import CounterReducer from "./reducers/CounterReducer";
import TodosReducer from "./reducers/TodosReducer";
import apiMiddlware from "./middlewares/apiMiddleware";
import PostReducer from "./reducers/PostReducer";
//store is responsible for combining reducer and middleware
const store = legacy_createStore(
  combineReducers({counter:CounterReducer, todos:TodosReducer,post:PostReducer}),
  applyMiddleware(apiMiddlware)
);
export default store;

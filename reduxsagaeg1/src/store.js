import { watcherSaga } from "./middlewares/sagasMiddleware";
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import TodosReducer from "./reducers/TodosReducer";
import createSagaMiddleware from "redux-saga";
import DogReducer from "./reducers/DogReducer";
import PostReducer from "./reducers/PostReducer";
const sagasMiddleware = createSagaMiddleware();
const store = legacy_createStore(
  combineReducers({ todos: TodosReducer, dog: DogReducer,post:PostReducer }),
  applyMiddleware(sagasMiddleware)
);
sagasMiddleware.run(watcherSaga);
export default store;

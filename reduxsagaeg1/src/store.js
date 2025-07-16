import { watcherSaga } from "./middlewares/sagasMiddleware";
import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import TodosReducer from "./reducers/TodosReducer";
import createSagaMiddleware from "redux-saga";
const sagasMiddleware =createSagaMiddleware()
const store = legacy_createStore(combineReducers({todos:TodosReducer}),applyMiddleware(sagasMiddleware))
sagasMiddleware.run(watcherSaga)
export default store
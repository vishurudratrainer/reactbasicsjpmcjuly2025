import { takeLatest, call, put } from "redux-saga/effects";
import { FETCH_TODO, FETCHED_TODO } from "../ActionType";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
 //Look up is done on action.type
  yield takeLatest(FETCH_TODO, todoFetcherSaga);


  //takeLatest means take the latest request
}

export function* todoFetcherSaga(){
    try{
        let data =yield call(todoApi)//call is used to make call to asynchronous services
        yield put({type:FETCHED_TODO,data:data})//put is used for dispatching new action

    }catch(e){
        console.error(e)
    }

}

function todoApi() {
  return fetch("https://jsonplaceholder.typicode.com/todos/").then((data) =>
    data.json()
  );
}
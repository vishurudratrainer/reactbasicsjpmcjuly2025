import { takeLatest, call, put } from "redux-saga/effects";
import { FETCH_TODO, FETCHED_TODO, GET_DOG, GOT_DOG } from "../ActionType";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  //Look up is done on action.type
  yield takeLatest(FETCH_TODO, todoFetcherSaga);
  yield takeLatest(GET_DOG, dogFetcherSaga);

  //takeLatest means take the latest request
}

function dogApi() {
  return fetch("https://dog.ceo/api/breeds/image/random").then((data) =>
    data.json()
  );
}
export function* dogFetcherSaga() {
  try {
    //              call(()=>{ fetch})
    let data = yield call(dogApi); //call is used to make call to asynchronous services
    yield put({ type: GOT_DOG, data: data }); //put is used for dispatching new action
  } catch (e) {
    console.error(e);
  }
}

export function* todoFetcherSaga() {
  try {
    let data = yield call(todoApi); //call is used to make call to asynchronous services
    yield put({ type: FETCHED_TODO, data: data }); //put is used for dispatching new action
  } catch (e) {
    console.error(e);
  }
}

function todoApi() {
  return fetch("https://jsonplaceholder.typicode.com/todos/").then((data) =>
    data.json()
  );
}

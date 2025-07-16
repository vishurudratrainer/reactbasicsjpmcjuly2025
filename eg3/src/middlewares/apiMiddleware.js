import { ADD_POST, FETCH_TODO, POST_SAVED, FETCHED_TODO, GOT_DOG, GET_DOG } from "../components/ActionType";

const apiMiddlware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action) {
      if (action.type === FETCH_TODO) {
        fetch("https://jsonplaceholder.typicode.com/todos/")
          .then((res) => res.json())
          .then((res) => dispatch({ type: FETCHED_TODO, data: res }));
      }
           if (action.type === GET_DOG) {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((res) => res.json())
          .then((res) => dispatch({ type: GOT_DOG, data: res }));
      }

      if (action.type === ADD_POST) {
        setTimeout(() => {
          fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(action.formData),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((res) => res.json())

            .then((res) => dispatch({ type: POST_SAVED, data: res }));
        }, 5000);
      }
    }
    next(action); //next is used to go to next middleware in chain. If not it will go tot the reducer
  };

export default apiMiddlware;

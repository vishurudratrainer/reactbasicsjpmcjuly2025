import { INC,DEC } from "../components/ActionType";
const CounterReducer = (state = { counter: 0 }, action) => {
  if (action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case INC:
        return { ...state, counter: state.counter + 1 };
      case DEC:
        return { ...state, counter: state.counter - 1 };
      default:
        return state;
    }
  }
  return state;
};
export default CounterReducer;

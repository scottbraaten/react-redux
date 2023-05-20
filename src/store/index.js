import { createStore } from "redux";

const reducer = (state = { counter: 0, visible: true }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      visible: state.visible,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + parseInt(action.value),
      visible: state.visible,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      visible: state.visible,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      visible: !state.visible,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;

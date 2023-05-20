import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, visible: true },
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.visible = !state.visible;
    },
  },
});

// const reducer = (state = { counter: 0, visible: true }, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       visible: state.visible,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + parseInt(action.value),
//       visible: state.visible,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       visible: state.visible,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       visible: !state.visible,
//     };
//   }
//   return state;
// };

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;

import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";
import { useRef } from "react";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const visible = useSelector((state) => state.visible);
  const increaseRef = useRef();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const increaseHandler = () => {
    dispatch({ type: "increase", value: increaseRef.current.value });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{visible && counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <input
          ref={increaseRef}
          type="text"
        />
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

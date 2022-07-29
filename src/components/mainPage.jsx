import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

import React, { useState, useEffect } from "react";

import Input from "./base/input";
const MainPage = () => {
  const [formData, setFormData] = useState({});

  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const incrementCounter = () => {
    dispatch(counterActions.increment());
  };
  const decrementCounter = () => {
    dispatch(counterActions.decrement());
  };

  const setData = ({ name, value }) => {
    let data = {};
    data = { ...formData };
    data[name] = value;
    setFormData(data);
    console.log(data);
  };
  return (
    <div>
      <h1>main page</h1>
      <h4>counter {counter}</h4>
      <h4>
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
      </h4>
      <h4>
        <Input name="userName" setData={setData} />
        <Input name="userFamily" setData={setData} />
        <Input name="userEmail" setData={setData} />
        <Input
          name="userSex"
          setData={setData}
          type="radio"
          data={[{ id: "man" }, { id: "woman" }]}
        />
      </h4>
    </div>
  );
};

export default MainPage;

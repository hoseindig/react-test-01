import React, { useState } from "react";
const Input = ({ name = "name", type = "text", setData, data }) => {
  const [inputValue, setinput] = useState("");
  //   debugger;
  const onChangeHandler = ({ currentTarget: input }) => {
    // const data = { ...this.state };
    setinput(input.value);
    setData({ name: input.name, value: input.value });
    // this.setState({ data });
  };

  return (
    <div>
      <label htmlFor="">{name}</label>
      {type !== "radio" && (
        <input
          name={name}
          type={type}
          placeholder="placeholder"
          value={inputValue}
          onChange={onChangeHandler}
        />
      )}

      {type &&
        type === "radio" &&
        data &&
        data.map((ele) => {
          return (
            <input
              title={ele.id}
              name={name}
              type={type}
              placeholder="placeholder"
              value={ele.id}
              onChange={onChangeHandler}
            />
          );
        })}
    </div>
  );
};

export default Input;

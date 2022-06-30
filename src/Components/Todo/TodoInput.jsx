import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, getTodo } from "../../Redux/Todo/action";

export const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    const data = {
      title: text,
      status: false,
    };
    dispatch(addTodo(data));
    dispatch(getTodo());
    setText("");
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Enter something"
        onChange={(e) => setText(e.target.value)}
        className="input-bar"
      />
      <button onClick={handleAdd} className="btn">
        ADD
      </button>
    </div>
  );
};

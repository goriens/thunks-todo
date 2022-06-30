import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodo } from "../../Redux/Todo/action";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);
  return (
    <div>
      <h1>Redux-Thunk Todo</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const TodoList = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.reducer.todo);
  const loading = useSelector((state) => state.reducer.isLoading);
  const error = useSelector((state) => state.reducer.isError);

  console.log(todo);
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error...</h2>}
      {todo?.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3>{item.title}</h3>
          <h3> {`${item.status}`}</h3>
        </div>
      ))}
    </div>
  );
};

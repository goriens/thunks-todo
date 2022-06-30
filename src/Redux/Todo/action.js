import * as Types from "./actionType";
import axios from "axios";

export const getTodoRequest = () => ({
  type: Types.GET_TODOS_REQUEST,
});
export const getTodoSuccess = (data) => ({
  type: Types.GET_TODOS_SUCCESS,
  payload: data,
});
export const getTodoFailure = () => ({
  type: Types.GET_TODOS_FAILURE,
});

export const getTodo = () => (dispatch) => {
  dispatch(getTodoRequest());
  axios
    .get("http://localhost:8080/todos")
    .then((r) => dispatch(getTodoSuccess(r.data)))
    .catch((e) => dispatch(getTodoFailure(e)));
};
//add todo

export const addTodoRequest = () => ({
  type: Types.ADD_TODOS_FAILURE,
});
export const addTodoSuccess = () => ({
  type: Types.ADD_TODOS_SUCCESS,
});
export const addTodoFailure = () => ({
  type: Types.ADD_TODOS_FAILURE,
});

export const addTodo = (data) => (dispatch) => {
  dispatch(addTodoRequest());
  axios
    .post("http://localhost:8080/todos", data)
    .then((r) => dispatch(addTodoSuccess(r.data)))
    .catch((e) => dispatch(addTodoFailure(e)));
};

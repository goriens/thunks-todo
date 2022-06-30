import * as Types from "./actionType";
const initialState = {
  todo: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case Types.GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        todo: action.payload,
      };
    case Types.GET_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case Types.ADD_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case Types.ADD_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case Types.ADD_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

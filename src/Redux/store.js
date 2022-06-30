import { reducer } from "./Todo/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  reducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
console.log("store", store.getState());

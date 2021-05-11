import { createStore, applyMiddleware } from "redux";
import drinksReducer from "../reducers/drinksReducers";
import thunk from "redux-thunk"

const store = createStore(drinksReducer, applyMiddleware(thunk));

export default store;

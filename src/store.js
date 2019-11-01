import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import tasksReducer from "./reducers";

const store = createStore(tasksReducer, composeWithDevTools());

export default store;

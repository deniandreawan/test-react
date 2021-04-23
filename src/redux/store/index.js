import { createStore, combineReducers } from "redux";
import costumersReducer from "../reducers/costumersReducer";

const rootReducers = combineReducers({
  costumers: costumersReducer,
});

export const store = createStore(rootReducers);

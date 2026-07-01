import { configureStore } from "@reduxjs/toolkit";
import swapiReducer from "./slices/swapiSlice";
import todoReducer from "./slices/todoSlice";

export const store = configureStore({
  reducer: {
    swapi: swapiReducer,
    todos: todoReducer,
  },
});
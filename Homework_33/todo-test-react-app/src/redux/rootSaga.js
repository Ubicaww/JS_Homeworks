import { all } from "redux-saga/effects";
import { watchTodos } from "./watchers";

export function* rootSaga() {
  yield all([
    watchTodos()
  ]);
}
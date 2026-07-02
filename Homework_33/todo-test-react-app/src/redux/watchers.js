import { takeEvery } from "redux-saga/effects";
import { 
  fetchTodosIntent, addTodoIntent, deleteTodoIntent, 
  toggleTodoIntent, editTodoIntent, clearAllIntent 
} from "./slices/todoSlice";
import { 
  fetchTodosWorker, addTodoWorker, deleteTodoWorker, 
  toggleTodoWorker, editTodoWorker, clearAllWorker 
} from "./workers";

export function* watchTodos() {
  yield takeEvery(fetchTodosIntent.type, fetchTodosWorker);
  yield takeEvery(addTodoIntent.type, addTodoWorker);
  yield takeEvery(deleteTodoIntent.type, deleteTodoWorker);
  yield takeEvery(toggleTodoIntent.type, toggleTodoWorker);
  yield takeEvery(editTodoIntent.type, editTodoWorker);
  yield takeEvery(clearAllIntent.type, clearAllWorker);
}
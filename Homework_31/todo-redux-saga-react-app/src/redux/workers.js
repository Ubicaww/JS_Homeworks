import { call, put, select } from "redux-saga/effects";
import { API_URL } from "../constants";
import { 
  setItems, addItem, removeItem, updateItem, clearItems, stopLoading 
} from "./slices/todoSlice";

function fetchHelper(url, options) {
  return fetch(url, options).then((response) => {
    if (!response.ok) throw new Error("Помилка запиту");
    return response.json();
  });
}

export function* fetchTodosWorker() {
  try {
    const todos = yield call(fetchHelper, API_URL);
    yield put(setItems(todos));
  } catch (e) {
    yield put(stopLoading());
    console.error(e);
  }
}

export function* addTodoWorker(action) {
  try {
    const newTodo = yield call(fetchHelper, API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: action.payload, checked: false }),
    });
    yield put(addItem(newTodo));
  } catch (e) {
    yield put(stopLoading());
  }
}

export function* deleteTodoWorker(action) {
  try {
    yield call(fetchHelper, `${API_URL}/${action.payload}`, { method: "DELETE" });
    yield put(removeItem(action.payload));
  } catch (e) {
    yield put(stopLoading());
  }
}

export function* toggleTodoWorker(action) {
  try {
    const { id, checked } = action.payload;
    const updatedTodo = yield call(fetchHelper, `${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ checked: !checked }),
    });
    yield put(updateItem(updatedTodo));
  } catch (e) {
    yield put(stopLoading());
  }
}

export function* editTodoWorker(action) {
  try {
    const { id, newText } = action.payload;
    const updatedTodo = yield call(fetchHelper, `${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newText }),
    });
    yield put(updateItem(updatedTodo));
  } catch (e) {
    yield put(stopLoading());
  }
}

export function* clearAllWorker() {
  try {
    const items = yield select((state) => state.todos.items);
    
    for (const item of items) {
      yield call(fetchHelper, `${API_URL}/${item.id}`, { method: "DELETE" });
    }
    
    yield put(clearItems());
  } catch (e) {
    yield put(stopLoading());
  }
}
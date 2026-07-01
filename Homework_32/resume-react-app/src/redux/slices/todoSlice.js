import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: { items: [] },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({ id: Date.now(), text: action.payload, checked: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(item => item.id === action.payload);
      if (todo) {
        todo.checked = !todo.checked;
      }
    }
  }
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
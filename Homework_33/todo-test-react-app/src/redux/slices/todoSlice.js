import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchTodosIntent: (state) => { state.isLoading = true; },
    addTodoIntent: (state) => { state.isLoading = true; },
    deleteTodoIntent: (state) => { state.isLoading = true; },
    toggleTodoIntent: (state) => { state.isLoading = true; },
    editTodoIntent: (state) => { state.isLoading = true; },
    clearAllIntent: (state) => { state.isLoading = true; },

    setItems: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.isLoading = false;
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
      state.isLoading = false;
    },
    clearItems: (state) => {
      state.items = [];
      state.isLoading = false;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    }
  },
});

export const {
  fetchTodosIntent, addTodoIntent, deleteTodoIntent, toggleTodoIntent, editTodoIntent, clearAllIntent,
  setItems, addItem, removeItem, updateItem, clearItems, stopLoading
} = todoSlice.actions;

export default todoSlice.reducer;
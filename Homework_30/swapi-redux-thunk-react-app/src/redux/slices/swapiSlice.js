import { createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../constants";

const initialState = {
  data: null,
  loading: false,
  error: "",
};

export const swapiSlice = createSlice({
  name: "swapi",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
      state.error = "";
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.data = null;
    },
    clearData: (state) => {
      state.data = null;
      state.error = "";
    },
  },
});

export const { setLoading, setData, setError, clearData } = swapiSlice.actions;

export const fetchSwapiData = (id) => (dispatch) => {
  dispatch(setLoading(true));
  
  fetch(`${API_URL}/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`No data found for ID "${id}".`);
      }
      return response.json();
    })
    .then((data) => {
      dispatch(setData(data));
    })
    .catch((error) => {
      dispatch(setError(error.message));
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};

export default swapiSlice.reducer;
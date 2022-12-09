import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  attendees: {},
};

export const fetchCampusAsync = createAsyncThunk(
  "campuses/fetchSingle",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/campuses/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const campusSlice = createSlice({
  name: "campus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCampusAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectCampus = (state) => {
  return state.campus;
};
export default campusSlice.reducer;

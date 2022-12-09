import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCampusesAsync = createAsyncThunk(
  "campuses/fetchAll",
  async () => {
    try {
      const { data } = await axios.get("/api/campuses");
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const campusesSlice = createSlice({
  name: "campuses",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCampusesAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectCampuses = (state) => state.campuses;

export default campusesSlice.reducer;

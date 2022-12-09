import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchStudentsAsync = createAsyncThunk(
  "students/fetchAll",
  async () => {
    try {
      const { data } = await axios.get("/api/students");
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const studentsSlice = createSlice({
  name: "students",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudentsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectStudents = (state) => state.students;

export default studentsSlice.reducer;
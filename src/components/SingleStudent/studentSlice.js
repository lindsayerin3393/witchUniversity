import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const fetchStudentAsync = createAsyncThunk(
  "students/fetchSingle",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/students/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudentAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectStudent = (state) => {
  return state.student;
};
export default studentSlice.reducer;

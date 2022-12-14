import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { unregisterStudentAsync } from "../singleStudent/studentSlice";

const initialState = {};

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

export const editCampusAsync = createAsyncThunk(
  "campuses/editCampus",
  async ({ id, name, address }) => {
    try {
      const { data } = await axios.put(`/api/campuses/${id}`, {
        name,
        address,
      });
      return data;
    } catch (error) {
      return error.message;
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
    builder.addCase(editCampusAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(unregisterStudentAsync.fulfilled, (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload.id
      );
    });
  },
});

export const selectCampus = (state) => {
  return state.campus;
};
export default campusSlice.reducer;

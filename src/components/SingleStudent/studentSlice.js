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

export const editStudentAsync = createAsyncThunk(
  "student/editStudent",
  async ({ id, firstName, lastName, email }) => {
    try {
      const { data } = await axios.put(`/api/students/${id}`, {
        firstName,
        lastName,
        email,
      });
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const unregisterStudentAsync = createAsyncThunk(
  "student/unregisterStudent",
  async ({ id, firstName, lastName, email, campusId }) => {
    try {
      const { data } = await axios.put(`/api/students/${id}`, {
        firstName,
        lastName,
        email,
        campusId,
      });
      return data;
    } catch (error) {
      return error.message;
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
    builder.addCase(editStudentAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(unregisterStudentAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectStudent = (state) => {
  return state.student;
};
export default studentSlice.reducer;

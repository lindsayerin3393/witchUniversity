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

export const addCampusesAsync = createAsyncThunk(
  "campuses/addCampuses",
  async ({ name, address }) => {
    try {
      const { data } = await axios.post("http://localhost:3000/api/campuses", {
        name,
        address,
      });
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteCampusAsync = createAsyncThunk(
  "campuses/deleteCampus",
  async (id, name, description, imageUrl) => {
    const { data } = await axios.delete(
      `http://localhost:3000/api/campuses/${id}`,
      {
        id,
        name,
        description,
        imageUrl,
      }
    );
    return data;
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
    builder.addCase(addCampusesAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const selectCampuses = (state) => state.campuses;

export default campusesSlice.reducer;

/* Here is where you will configure the store

*/

import { configureStore } from "@reduxjs/toolkit";
import campusesReducer from "../components/campusesSlice";
import studentsReducer from "../components/studentsListSlice";

export const store = configureStore({
  reducer: {
    campuses: campusesReducer,
    students: studentsReducer,
  },
});

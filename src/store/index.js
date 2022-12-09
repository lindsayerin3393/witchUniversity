/* Here is where you will configure the store

*/

import { configureStore } from "@reduxjs/toolkit";
import campusesReducer from "../components/campusesSlice";
import studentsReducer from "../components/studentsListSlice";
import studentReducer from "../components/SingleStudent/studentSlice";
import campusReducer from "../components/singleCampus/campusSlice";

export const store = configureStore({
  reducer: {
    campuses: campusesReducer,
    students: studentsReducer,
    student: studentReducer,
    campus: campusReducer,
  },
});

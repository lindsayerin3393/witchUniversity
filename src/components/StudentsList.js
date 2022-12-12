import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddStudent from "./addStudent/AddStudent";
import {
  selectStudents,
  fetchStudentsAsync,
  deleteStudentAsync,
} from "./studentsListSlice";

const StudentsList = () => {
  const dispatch = useDispatch();
  const students = useSelector(selectStudents);
  useEffect(() => {
    dispatch(fetchStudentsAsync());
  }, [dispatch]);
  return (
    <div>
      {students.map((student) => {
        return (
          <div key={student.id}>
            <Link to={`/students/${student.id}`}>
              {student.firstName} {student.lastName}
            </Link>
            <h4>{student.email}</h4>
            <h4>{student.gpa}</h4>
            <h4>{student.campusId}</h4>
            <img src={student.imageUrl} alt="image" />
            <button
              type="delete"
              onClick={async (evt) => {
                evt.preventDefault();
                await dispatch(
                  deleteStudentAsync(
                    student.id,
                    student.firstName,
                    student.lastName,
                    student.email,
                    student.gpa
                  )
                );
                await dispatch(fetchStudentsAsync());
              }}
            >
              Remove Student!
            </button>
          </div>
        );
      })}
      <AddStudent />
    </div>
  );
};

export default StudentsList;

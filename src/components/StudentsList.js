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
      <div>
        {students.map((student) => {
          return (
            <div key={student.id} id="students">
              <Link to={`/students/${student.id}`}>
                {student.firstName} {student.lastName}
              </Link>
              <h4>Email: {student.email}</h4>
              <h4>GPA: {student.gpa}</h4>
              <img src={student.imageUrl} alt="image" id="image" />
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
      </div>
      <AddStudent />
    </div>
  );
};

export default StudentsList;

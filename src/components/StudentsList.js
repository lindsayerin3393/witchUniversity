import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectStudents, fetchStudentsAsync } from "./studentsListSlice";

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
              {student.firstName}
              {student.lastName}
            </Link>
            <h4>{student.email}</h4>
            <h4>{student.gpa}</h4>
            <h4>{student.campusId}</h4>
            <img src={student.imageUrl} alt="image" />
          </div>
        );
      })}
    </div>
  );
};

export default StudentsList;

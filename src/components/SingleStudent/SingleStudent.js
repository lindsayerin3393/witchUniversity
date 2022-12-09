import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectStudent, fetchStudentAsync } from "./studentSlice";

const Student = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const student = useSelector(selectStudent);
  useEffect(() => {
    dispatch(fetchStudentAsync(id));
  }, [dispatch, id]);
  const campusId = student.campusID;
  return (
    <div>
      <div key={student.id}>
        <h3>
          {student.firstName} {student.lastName}
        </h3>
        <h4>Contact Email: {student.email}</h4>
        <h4>GPA: {student.gpa}</h4>
        <h4>Current School: {student.campusId}</h4>
        <img src={student.imageUrl} alt="image" />
      </div>
    </div>
  );
};

export default Student;

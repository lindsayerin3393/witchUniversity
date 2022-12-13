import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectStudent, fetchStudentAsync } from "./studentSlice";
import EditStudent from "./EditStudent";

const Student = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const student = useSelector(selectStudent);
  useEffect(() => {
    dispatch(fetchStudentAsync(id));
  }, [dispatch, id]);

  return (
    <div>
      <div key={student.id}>
        <h3>
          {student.firstName} {student.lastName}
        </h3>
        <h4>Contact Email: {student.email}</h4>
        <h4>GPA: {student.gpa}</h4>
        <div>
          {student.campus && <h4>Current School: {student.campus.name}</h4>}
        </div>
        <img src={student.imageUrl} alt="image" />
        <EditStudent student={student} />
      </div>
    </div>
  );
};

export default Student;

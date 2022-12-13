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
      <div key={student.id} id="students">
        <h3>
          {student.firstName} {student.lastName}
        </h3>
        <p>Contact Email: {student.email}</p>
        <p>GPA: {student.gpa}</p>
        <div>
          {student.campus && <p>Current School: {student.campus.name}</p>}
        </div>
        <img src={student.imageUrl} alt="image" id="image" />
        <h3>Update this Student's Info:</h3>
        <EditStudent student={student} />
      </div>
    </div>
  );
};

export default Student;

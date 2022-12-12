import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectStudent, fetchStudentAsync } from "./studentSlice";
import EditStudent from "./editStudent";

const Student = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const student = useSelector(selectStudent);
  const { firstName, lastName, email } = student;
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
        <h4>Current School: </h4>
        {/* <div>
          {student.campus && student.campus.length
            ? student.campus.map((campus) => {
                return (
                  <>
                    <div key={campus.id}>
                      <h4>
                        {campus.name} {campus.address}
                      </h4>
                    </div>
                  </>
                );
              })
            : null}
        </div> */}
        <img src={student.imageUrl} alt="image" />
        <EditStudent student={student} />
      </div>
    </div>
  );
};

export default Student;

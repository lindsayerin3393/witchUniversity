import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectStudent, fetchStudentAsync } from "./studentSlice";
import EditStudent from "./editStudent";

const Student = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const student = useSelector((state) => state.student);
  // const { firstName, lastName, email } = student;
  useEffect(() => {
    dispatch(fetchStudentAsync(id));
    console.log(student.campus);
  }, [dispatch, id]);
  // console.log(student.campus.name);
  // const campusArr = (student) => {
  //   const newArr = [];
  //   const campus = student.campus;
  //   console.log(student.campus);
  //   newArr.push(campus);
  //   return newArr;
  // };
  // const campusArray = campusArr(student);
  // console.log(campusArray);

  return (
    <div>
      <div key={student.id}>
        <h3>
          {student.firstName} {student.lastName}
        </h3>
        <h4>Contact Email: {student.email}</h4>
        <h4>GPA: {student.gpa}</h4>

        {/* <h4>Current School: {student.campus.name}</h4> */}
        {/* <div>
          {campusArray && campusArray.length
            ? campusArray.map((campus) => {
                return (
                  <>
                    <div>
                      <h4>{campus.name}</h4>
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

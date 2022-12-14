import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCampus, fetchCampusAsync } from "./campusSlice";
import EditCampus from "./EditCampus";
import { unregisterStudentAsync } from "../singleStudent/studentSlice";
import { Link } from "react-router-dom";

const Campus = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const campus = useSelector(selectCampus);
  useEffect(() => {
    dispatch(fetchCampusAsync(id));
  }, [dispatch, id]);
  const unregisterStudent = (student) => {
    const { id, firstName, lastName, email } = student;
    dispatch(
      unregisterStudentAsync({ id, firstName, lastName, email, campusId: null })
    );
  };
  return (
    <div key={campus.id} className="campuses">
      <h2>{campus.name}</h2>
      <h3 className="italicized">{campus.address}</h3>
      <h4>{campus.description}</h4>
      <img src={campus.imageUrl} alt="image" id="image" />
      <h4 className="bold">Students:</h4>
      <div>
        {campus.students && campus.students.length
          ? campus.students.map((student) => {
              return (
                <div key={student.id} className="row">
                  <Link to={`/students/${student.id}`}>
                    {student.firstName} {student.lastName}
                  </Link>
                  <button
                    id="button"
                    onClick={() => unregisterStudent(student)}
                  >
                    Unregister
                  </button>
                </div>
              );
            })
          : "No students currently enrolled"}
      </div>
      <h3> Edit University:</h3>
      <EditCampus campus={campus} />
    </div>
  );
};

export default Campus;

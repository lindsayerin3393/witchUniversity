import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCampus, fetchCampusAsync } from "./campusSlice";
import EditCampus from "./EditCampus";
import { unregisterStudentAsync } from "../SingleStudent/studentSlice";

const Campus = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const campus = useSelector(selectCampus);
  // const [campusId, setCampusId] = useState("");
  useEffect(() => {
    dispatch(fetchCampusAsync(id));
  }, [dispatch, id]);
  // const handleClick = (student) => {
  //   student.campusId = null;
  //   console.log(student);
  // };
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
                  <p>
                    {student.firstName} {student.lastName}
                  </p>
                  <button
                    id="button"
                    onClick={() => unregisterStudent(student)}
                  >
                    Unregister
                  </button>
                </div>
              );
            })
          : null}
      </div>
      <h3> Edit University:</h3>
      <EditCampus campus={campus} />
    </div>
  );
};

export default Campus;

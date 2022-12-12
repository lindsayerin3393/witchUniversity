import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCampus, fetchCampusAsync } from "./campusSlice";

const Campus = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const campus = useSelector(selectCampus);
  useEffect(() => {
    dispatch(fetchCampusAsync(id));
  }, [dispatch, id]);
  return (
    <div key={campus.id}>
      <h2>{campus.name}</h2>
      <h3 className="italicized">{campus.address}</h3>
      <h4>{campus.description}</h4>
      <img src={campus.imageUrl} alt="image" />
      <h4 className="bold">Students:</h4>
      <div>
        {campus.students && campus.students.length
          ? campus.students.map((student) => {
              return (
                <>
                  <div key={student.id}>
                    <h4>
                      {student.firstName} {student.lastName}
                    </h4>
                  </div>
                </>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Campus;

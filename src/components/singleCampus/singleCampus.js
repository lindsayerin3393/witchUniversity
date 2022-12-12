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
      <h4>{campus.description}</h4>
      <h4>{campus.address}</h4>
      <img src={campus.imageUrl} alt="image" />
      <h4>{campus.students}</h4>
      {/* <ul>
        Students:
        <li>{campus}</li>
      </ul> */}
    </div>
  );
};

export default Campus;

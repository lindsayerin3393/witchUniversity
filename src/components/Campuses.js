import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCampuses, fetchCampusesAsync } from "./campusesSlice";

const Campuses = () => {
  const dispatch = useDispatch();
  const campuses = useSelector(selectCampuses);
  useEffect(() => {
    dispatch(fetchCampusesAsync());
  }, [dispatch]);
  return (
    <div>
      {campuses.map((campus) => {
        return (
          <div key={campus.id}>
            <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
            <h4>{campus.description}</h4>
            <h4>{campus.address}</h4>
            <img src={campus.imageUrl} alt="image" />
          </div>
        );
      })}
    </div>
  );
};

export default Campuses;

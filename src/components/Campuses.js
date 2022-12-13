import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectCampuses,
  fetchCampusesAsync,
  deleteCampusAsync,
} from "./campusesSlice";
import AddCampus from "./addCampus/AddCampus";

const Campuses = () => {
  const dispatch = useDispatch();
  const campuses = useSelector(selectCampuses);
  useEffect(() => {
    dispatch(fetchCampusesAsync());
  }, [dispatch]);
  return (
    <div>
      <div>
        {campuses.map((campus) => {
          return (
            <div key={campus.id} id="campuses">
              <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
              <h4 className="italicized">{campus.address}</h4>
              <h4>{campus.description}</h4>
              <img src={campus.imageUrl} alt="image" id="image" />
              <button
                type="delete"
                onClick={async (evt) => {
                  evt.preventDefault();
                  await dispatch(
                    deleteCampusAsync(
                      campus.id,
                      campus.description,
                      campus.imageUrl,
                      campus.name
                    )
                  );
                  await dispatch(fetchCampusesAsync());
                }}
              >
                Remove Campus!
              </button>
            </div>
          );
        })}
        <h3>Add a New University!</h3>
        <AddCampus />
      </div>
    </div>
  );
};

export default Campuses;

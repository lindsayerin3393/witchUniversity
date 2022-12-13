import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCampusAsync, editCampusAsync } from "./campusSlice";

const EditCampus = (props) => {
  const id = props.campus.id;
  const [name, setName] = useState(props.campus.name);
  const [address, setAddress] = useState(props.campus.address);
  const dispatch = useDispatch();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await dispatch(editCampusAsync({ id, name, address }));
    setName("");
    setAddress("");
    await dispatch(fetchCampusAsync(id));
  };

  return (
    <>
      <form id="edit-campus-form" key={props.campus.id} onSubmit={handleSubmit}>
        <label>Edit Campus Name:</label>
        <input
          name="name"
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <label>Edit Campus Address:</label>
        <input
          name="address"
          value={address}
          type="text"
          onChange={(e) => setAddress(e.target.value)}
        />

        <button type="submit" disabled={!name || !address}>
          Submit
        </button>
      </form>
    </>
  );
};

export default EditCampus;

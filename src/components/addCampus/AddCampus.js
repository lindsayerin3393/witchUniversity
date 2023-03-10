import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCampusesAsync, fetchCampusesAsync } from "../campusesSlice";

const AddCampus = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await dispatch(addCampusesAsync({ name, address }));
    setName("");
    setAddress("");
  };

  return (
    <>
      <form id="campus-form" onSubmit={handleSubmit}>
        <label>New Campus Name:</label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>New Campus Address:</label>
        <input
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <button type="submit" disabled={!name || !address}>
          Submit
        </button>
      </form>
    </>
  );
};

export default AddCampus;

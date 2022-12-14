import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudentsAsync } from "../studentsListSlice";

const AddStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await dispatch(addStudentsAsync({ firstName, lastName, email }));
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <>
      <form id="student-form" onSubmit={handleSubmit}>
        <label>New Student First Name:</label>
        <input
          name="firstName"
          value={firstName}
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>New Student Last Name:</label>
        <input
          name="lastName"
          value={lastName}
          type="text"
          onChange={(e) => setLastName(e.target.value)}
        />

        <label>New Student Email:</label>
        <input
          name="email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" disabled={!firstName || !lastName || !email}>
          Submit
        </button>
      </form>
    </>
  );
};

export default AddStudent;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchStudentAsync, editStudentAsync } from "./studentSlice";

const EditStudent = (props) => {
  const id = props.student.id;
  const [firstName, setFirstName] = useState(props.student.firstName);
  const [lastName, setLastName] = useState(props.student.lastName);
  const [email, setEmail] = useState(props.student.email);
  const dispatch = useDispatch();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await dispatch(editStudentAsync({ id, firstName, lastName, email }));
    setFirstName("");
    setLastName("");
    setEmail("");
    await dispatch(fetchStudentAsync(id));
  };
  return (
    <>
      <form
        id="edit-student-form"
        key={props.student.id}
        onSubmit={handleSubmit}
      >
        <label>Edit Student First Name:</label>
        <input
          name="firstName"
          value={firstName}
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label>Edit Student Last Name:</label>
        <input
          name="lastName"
          value={lastName}
          type="text"
          onChange={(e) => setLastName(e.target.value)}
        />

        <label>Edit Student Email:</label>
        <input
          name="email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" disabled={!firstName || !lastName}>
          Submit
        </button>
      </form>
    </>
  );
};

export default EditStudent;

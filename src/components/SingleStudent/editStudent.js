import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import selectStudent, {
  fetchStudentAsync,
  editStudentAsync,
} from "./studentSlice";

const EditStudent = (props) => {
  const { id, firstName, lastName, email } = props.student;
  // const student = useSelector(selectStudent);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await dispatch(
      editStudentAsync({ id, newFirstName, newLastName, newEmail })
    );
    setNewFirstName("");
    setNewLastName("");
    setNewEmail("");
    // await dispatch(fetchStudentAsync(id));
  };

  return (
    <>
      <form id="edit-student-form" key={id} onSubmit={handleSubmit}>
        <label>Edit Student First Name:</label>
        <input
          name="firstName"
          value={newFirstName}
          onChange={(e) => setNewFirstName(e.target.value)}
        />

        <label>Edit Student Last Name:</label>
        <input
          name="lastName"
          value={newLastName}
          onChange={(e) => setNewLastName(e.target.value)}
        />

        <label>Edit Student Email:</label>
        <input
          name="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />

        <button type="submit" disabled={!firstName || !lastName}>
          Submit
        </button>
      </form>
    </>
  );
};

export default EditStudent;

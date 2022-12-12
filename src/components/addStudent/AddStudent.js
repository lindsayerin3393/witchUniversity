import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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

  // const handleDelete = async (evt) => {
  //   evt.preventDefault();
  //   await dispatch(deleteTodoAsync({ id, taskName, assignee }));
  //   navigate("/");
  // };

  return (
    <>
      <form id="student-form" onSubmit={handleSubmit}>
        <label>New Student First Name:</label>
        <input
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>New Student Last Name:</label>
        <input
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label>New Student Email:</label>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" disabled={!firstName || !lastName || !email}>
          Submit
        </button>
      </form>
      {/* <Link to="/">Cancel</Link>
      </form>
      <div className="delete-button">
        <button type="delete" onClick={handleDelete}>
          Delete
        </button>
      </div> */}
    </>
  );
};

export default AddStudent;

import React from "react";
import Campuses from "./Campuses";
import { Link, Route, Routes } from "react-router-dom";
import StudentsList from "./StudentsList";
import Student from "./SingleStudent/SingleStudent";
import Campus from "./singleCampus/singleCampus";
/*
    This is you entry point for your routes
*/
const Main = () => {
  return (
    <div>
      <nav>
        <div> {/* <Link to="/">Goodie Bag!</Link> */}</div>
        <div>
          <Link to="/students">Students!</Link>
        </div>
        <div>
          <Link to="/campuses">Campuses!</Link>
        </div>
      </nav>
      <main>
        <h1>Welcome to our School Selection!</h1>
        <p>Decide where you'd like to learn witchcraft and Wizardry!!!</p>
        <Routes>
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/students" element={<StudentsList />} />
          <Route path="/students/:id" element={<Student />} />
          <Route path="/campuses/:id" element={<Campus />} />
          {/* <Route path="/candies/:id" element={<Candy />} /> */}
        </Routes>
      </main>
    </div>
  );
};

export default Main;

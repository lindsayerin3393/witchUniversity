import React from "react";
import Campuses from "./Campuses";
import { Link, Route, Routes } from "react-router-dom";
import StudentsList from "./StudentsList";
import Student from "./SingleStudent/SingleStudent";
import Campus from "./singleCampus/singleCampus";

const Main = () => {
  return (
    <div>
      <nav>
        <div id="navbar" className="row">
          <div className="link">
            <Link to="/students">Accio Students!</Link>
          </div>
          <div className="link">
            <Link to="/campuses">Accio Campuses!</Link>
          </div>
        </div>
      </nav>
      <main>
        <h1 id="header">Welcome to our School Selection!</h1>
        <h3 id="header">
          Decide where you'd like to learn Witchcraft and Wizardry!!!
        </h3>
        <Routes>
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/students" element={<StudentsList />} />
          <Route path="/students/:id" element={<Student />} />
          <Route path="/campuses/:id" element={<Campus />} />
        </Routes>
      </main>
    </div>
  );
};

export default Main;

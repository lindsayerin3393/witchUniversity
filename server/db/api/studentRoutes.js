const router = require("express").Router();
const { Campuses, Students } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const students = await Students.findAll();
    res.send(students);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const student = await Students.findByPk(req.params.id);
    // const studentWCampus = await Students.findCampus(student.id);
    if (!student) res.sendStatus(404);
    else {
      res.send(student);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;

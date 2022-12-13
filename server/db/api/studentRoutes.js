const router = require("express").Router();
const { CampusesModel, Students } = require("../models");

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
    const student = await Students.findByPk(req.params.id, {
      include: CampusesModel,
    });
    if (!student) res.sendStatus(404);
    else {
      res.send(student);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Students.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const student = await Students.findByPk(req.params.id);
    res.send(await student.update(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deletedStudent = await Students.findByPk(req.params.id);
    if (!deletedStudent) {
      res.sendStatus(404);
    } else {
      await Students.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;

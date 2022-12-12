const router = require("express").Router();
const { CampusesModel } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const schools = await CampusesModel.findAll();
    res.send(schools);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const campus = await CampusesModel.findByPk(req.params.id);
    const campusWStudents = await CampusesModel.findStudents(campus.id);
    if (!campusWStudents) res.sendStatus(404);
    else {
      res.send(campusWStudents);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await CampusesModel.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const campus = await CampusesModel.findByPk(req.params.id);
    res.send(await campus.update(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deletedCampus = await CampusesModel.findByPk(req.params.id);
    if (!deletedCampus) {
      res.sendStatus(404);
    } else {
      await CampusesModel.destroy({
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

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
    if (!campus) res.sendStatus(404);
    else {
      res.send(campus);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;

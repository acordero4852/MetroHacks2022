const router = require("express").Router();
const { Doctor } = require("../models");

router.get("/", (req, res) => {
  Doctor.find({})
    .select("-__v")
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

module.exports = router;

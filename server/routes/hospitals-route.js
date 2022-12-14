const router = require("express").Router();
const { Hospital } = require("../models");

router.get("/", (req, res) => {
  Hospital.find({})
    .limit(100)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

router.get("/:zip", (req, res) => {
  Hospital.find({ zip_code: req.params.zip }).then((data) => res.json(data));
});

module.exports = router;

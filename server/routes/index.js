const router = require("express").Router();

const doctorRoute = require("./doctor-route");

router.use("/", doctorRoute);

module.exports = router;

const router = require("express").Router();
const doctorRoute = require("./doctor-route");

router.use("/doctor", doctorRoute);

router.use((req, res) => {
  res.status(404).send("<h1>😝 404 Error!</h1>");
});

module.exports = router;

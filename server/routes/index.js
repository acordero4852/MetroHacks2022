const router = require("express").Router();
const hospitalRoute = require("./hospitals-route");

router.use("/hospital", hospitalRoute);

// router.use((req, res) => {
//   res.status(404).send("<h1>😝 hello 404 Error!</h1>");
// });

module.exports = router;

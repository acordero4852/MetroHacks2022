const router = require("express").Router();

const postRoutes = require("./post-route");

router.use("/", postRoutes);

module.exports = router;

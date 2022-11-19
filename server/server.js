const express = require("express");
const path = require("path");
const db = require("./config/connection");
const seedDoctor = require("./seeds/doctor-seeds");
const seedHospital = require("./seeds/hospital-seeds");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/build")));

db.once("open", () => {
  seedDoctor();
  seedHospital();
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

const express = require("express");
const path = require("path");
const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/build")));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));

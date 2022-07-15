const express = require("express");
const app = express();

const morgan = require("morgan");
const bodyParser = require("body-parser");

const recordsRoutes = require("./api/routes/records");

const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://izzy1647:98z11z28Y@cluster0.fx02vkp.mongodb.net/?retryWrites=true&w=majority`,
);

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
    return res.status(200).json({});
  }

  next();
});

app.use("/records", recordsRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found.");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

module.exports = app;

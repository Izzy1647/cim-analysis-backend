const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Record = require("../models/record");

router.get("/", (req, res, next) => {
  Record.find()
    .exec()
    .then((records) => {
      res.status(200).json(records);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/count", async (req, res, next) => {
  try {
    const joeCount = await Record.count({ decision: "joe" }).exec();
    const emilyCount = await Record.count({ decision: "emily" }).exec();
    const adamCount = await Record.count({ decision: "adam" }).exec();

    res.status(200).json([
      { name: "Joe", value: joeCount },
      { name: "Emily", value: emilyCount },
      { name: "Adam", value: adamCount },
    ]);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:recordId", (req, res, next) => {
  const id = req.params.recordId;
  Record.findOne({ _id: id })
    .exec()
    .then((record) => {
      res.status(200).json({
        message: "Record found",
        record,
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res, next) => {
  const record = new Record({
    _id: new mongoose.Types.ObjectId(),
    ...req.body,
  });

  record
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Success",
        result,
      });
    })
    .catch((err) => {
      console.log("err:", err);
      res.status(500).json({
        message: "Error saving record",
        err,
      });
    });
});

router.delete("/all", (req, res, next) => {
  Record.remove()
    .exec()
    .then((result) => {
      console.log("res:", result);
      res.status(200).json({
        message: "Success",
      });
    })
    .catch((err) => {
      console.log("err:", err);
      res.status(500).json({
        message: "Error deleting all record",
      });
    });
});

module.exports = router;

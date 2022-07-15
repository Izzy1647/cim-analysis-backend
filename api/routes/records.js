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

router.get("/:recordId", (req, res, next) => {
  const id = req.params.recordId;
  Record.findOne({ _id: id }, (err, record) => {
    if (err) {
      res.status(500).json({
        error: "Record not found",
      });
    } else {
      res.status(200).json({
        message: "Record found",
        record,
      });
    }
  });
});

router.post("/", (req, res, next) => {
  const record = new Record({
    _id: new mongoose.Types.ObjectId(),
    joeMarkFizzbuzz: req.body.joeMarkFizzbuzz,
    joeMarkTwoSum: req.body.joeMarkTwoSum,
    joeMarkLps: req.body.joeMarkLps,
    emilyMarkFizzbuzz: req.body.emilyMarkFizzbuzz,
    emilyMarkTwosum: req.body.emilyMarkTwosum,
    emilyMarkLps: req.body.emilyMarkLps,
    adamMarkFizzbuzz: req.body.adamMarkFizzbuzz,
    adamMarkTwoSum: req.body.adamMarkTwoSum,
    adamMarkLps: req.body.adamMarkLps,
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
  Record.remove().exec().then(result => {
    console.log("res:", result)
    res.status(200).json({
      message: "Success",
    })
  }).catch(err => {
    console.log("err:", err);
    res.status(500).json({
      message: "Error deleting all record",
    })
  })
})

module.exports = router;

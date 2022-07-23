const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Record = require("../models/record");

router.get("/joe", (req, res, next) => {
  let joeFizzbuzzCount = 0
  let joeLpsCount = 0
  let joeTwosumCount = 0

  let joeFizzbuzzScore = 0
  let joeLpsScore = 0
  let joeTwosumScore = 0

  Record.find()
    .exec()
    .then((records) => {
      records.forEach((item) => {
        if(item.joeMarkFizzbuzz >= 0) {
          joeFizzbuzzScore += item.joeMarkFizzbuzz
          joeFizzbuzzCount ++
        }

        if(item.joeMarkTwoSum >= 0) {
          joeTwosumScore += item.joeMarkTwoSum
          joeTwosumCount ++
        }

        if(item.joeMarkLps >= 0) {
          joeLpsScore += item.joeMarkLps
          joeLpsCount ++
        }
      })

      res.status(200).json({
        fizzbuzz: (joeFizzbuzzScore / joeFizzbuzzCount).toFixed(2),
        twosum: (joeTwosumScore / joeTwosumCount).toFixed(2),
        lps: (joeLpsScore / joeLpsCount).toFixed(2)
      })
    })
    .catch((err) => {
      res.status(500).json(err)
    });
});


router.get("/emily", (req, res, next) => {
  let emilyFizzbuzzCount = 0
  let emilyLpsCount = 0
  let emilyTwosumCount = 0

  let emilyFizzbuzzScore = 0
  let emilyLpsScore = 0
  let emilyTwosumScore = 0

  Record.find()
    .exec()
    .then((records) => {
      records.forEach((item) => {
        if(item.emilyMarkFizzbuzz >= 0) {
          emilyFizzbuzzScore += item.emilyMarkFizzbuzz
          emilyFizzbuzzCount ++
        }

        if(item.emilyMarkTwoSum >= 0) {
          emilyTwosumScore += item.emilyMarkTwoSum
          emilyTwosumCount ++
        }

        if(item.emilyMarkLps >= 0) {
          emilyLpsScore += item.emilyMarkLps
          emilyLpsCount ++
        }
      })

      res.status(200).json({
        fizzbuzz: (emilyFizzbuzzScore / emilyFizzbuzzCount).toFixed(2),
        twosum: (emilyTwosumScore / emilyTwosumCount).toFixed(2),
        lps: (emilyLpsScore / emilyLpsCount).toFixed(2)
      })
    })
    .catch((err) => {
      res.status(500).json(err)
    });
});

router.get("/adam", (req, res, next) => {
  let adamFizzbuzzCount = 0
  let adamLpsCount = 0
  let adamTwosumCount = 0

  let adamFizzbuzzScore = 0
  let adamLpsScore = 0
  let adamTwosumScore = 0

  Record.find()
    .exec()
    .then((records) => {
      records.forEach((item) => {
        if(item.adamMarkFizzbuzz >= 0) {
          adamFizzbuzzScore += item.adamMarkFizzbuzz
          adamFizzbuzzCount ++
        }

        if(item.adamMarkTwoSum >= 0) {
          adamTwosumScore += item.adamMarkTwoSum
          adamTwosumCount ++
        }

        if(item.adamMarkLps >= 0) {
          adamLpsScore += item.adamMarkLps
          adamLpsCount ++
        }
      })

      res.status(200).json({
        fizzbuzz: (adamFizzbuzzScore / adamFizzbuzzCount).toFixed(2),
        twosum: (adamTwosumScore / adamTwosumCount).toFixed(2),
        lps: (adamLpsScore / adamLpsCount).toFixed(2)
      })
    })
    .catch((err) => {
      res.status(500).json(err)
    });
});

module.exports = router;

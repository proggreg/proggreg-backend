require('dotenv').config();
var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');


const Schema = mongoose.Schema;

// TODO Add more attributes eg. Date/Time, Device
const snakeScoresSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  score: Number
});

const snakeScores = mongoose.model('snakeScores', snakeScoresSchema);
// connect to db




mongoose.connection.on('error', (err) => console.log(err));

// Get All Scores in sorted order with scores descending
router.get("/api/users", async (req, res, next) => {
  const scores = await snakeScores.find().sort({
    score: -1
  });

  if (scores.length == 0) {
    return res.status(404).json({
      message: "No Scores Found"
    });
  } else {
    return res.json(scores);
  }
});

// Create User
router.post("/api/users/", (req, res) => {
  if (!typeof req.body.username == "string" || isNaN(req.body.score)) {
    console.log("No Username Given");
    res.status(400).json({
      message: 'Invalid Data Type'
    });
  }

  const snakeScore = new snakeScores({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    score: parseInt(req.body.score)
  });

  try {
    snakeScore.save(function (err, doc) {
      console.log(doc);
      if (err) {
        console.error(err)
        res.status(404);
      } else {
        console.error("Ok")
        res.status(200).json({
          message: "new score added",
          username: doc
        });
      }
    });
  } catch (error) {
    return res.status(404);
  }
});


// TODO not needed for snake game scores but maybe useful for a future feature 
// Update Score
// router.put("/:id", (req, res) => {
//   const found = users.some(user => user.id === parseInt(req.params.id));

//   if (found) {
//     const updateuser = req.body;
//     users.forEach(user => {
//       if (user.id === parseInt(req.body.id)) {
//         user.name = updateuser.name ? updateuser.name : user.name;
//         user.score = (updateuser.score > user.score) ? updateuser.score : user.score;
//       }
//     });
//     res.json({
//       message: `user's score updated, current score is ${user.score}`
//     });
//   }
// });



module.exports = router;
require('dotenv').config();
var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const snakeScoresSchema = new Schema({
  userid: ObjectId,
  username: String,
  score: Number
});



const snakeScores = mongoose.model('snakeScores', snakeScoresSchema);
// connect to db
const dbConnect = async () => {
  let db = null;
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true
    })
  } catch (error) {
    console.error(error);
  }
}

// TODO Add error handling for connection to db
dbConnect();



// Get All Users
router.get("/api/users", async (req, res, next) => {
  const scores = await snakeScores.find({});

  if (scores.length == 0) {
    res.status(404).json({
      message: "No Scores Found"
    });
  } else {
    res.json(scores);
  }
});


// TODO show single users scores

// Get Single User
// router.get("/api/users/:id", (req, res, next) => {
//   if (req.param.id)
//     res.json(users.filter((user) => user.id === parseInt(req.params.id)));
//   else
//     res.status(400).json({
//       message: `no user with id ${req.params.id} found`
//     });
// });

// Create User
router.post("/api/users/", (req, res) => {
  // if (!typeof req.body.username == "string" || isNaN(req.body.score)) {
  //   console.log("No Username Given");
  //   return res.status(400).json({
  //     message: 'Invalid Data Type'
  //   });
  // }

  console.log('Hello');

  const snakeScore = new snakeScores({
    username: req.body.username,
    score: parseInt(req.body.score)
  });

  // ToDo add working validation for username
  // if (!newUser.username) {
  //   console.log("No Username Given");
  //   return res.status(400).json({
  //     message: 'Please include a username and score'
  //   });
  // }

  snakeScore.save(function (err, doc) {

    console.log(err);
    if (err) return console.error(err);
    res.status(200).json({
      message: "new score added"
    });
  });


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
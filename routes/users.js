var express = require("express");
var router = express.Router();

var users = [
  {
    username: "Greg",
    id: 1,
  },
  {
    username: "Ellen",
    id: 2,
  },
  {
    username: "Bob",
    id: 3,
  },
];

// Get All Users
router.get("/api/users", (req, res, next) => {
  res.json(users);
});

// Get Single User

router.get("/api/users/:id", (req, res, next) => {
  if (req.param.id)
    res.json(users.filter((user) => user.id === parseInt(req.params.id)));
  else
    res.status(400).json({ message: `no user with id ${req.params.id} found` });
});

module.exports = router;

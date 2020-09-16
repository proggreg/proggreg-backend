require('dotenv').config();
var createError = require("http-errors");
// var history = require('connect-history-api-fallback');
var express = require("express");
var app = express();
var path = require("path");
var cookieParser = require("cookie-parser");
var dbConnect = require('./db');

process.env.NODE_ENV = 'production';

dbConnect();

// TODO When deploying to prod change this
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'DEL', 'GET')
    return res.status(200).json();
  }
  next();
});

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/snakescores");
var emailRouter = require("./routes/email");


// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/", usersRouter);
app.use("/email", emailRouter);



// handle production 
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "public")));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
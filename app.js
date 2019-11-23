var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors   = require('cors');
var mongoose = require('mongoose');

// Mongodb config
var database = require('./config/database.config');

mongoose.connect(database.database.url,database.options,(error)=>{
  // console.log(error)
})
  .then()
  .catch(error => console.log(error));
mongoose.set('debug',true);

// Models & routers

require('./models/Users.model');
require('./config/passport.config');

// Api

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/api/users.router');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/api', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

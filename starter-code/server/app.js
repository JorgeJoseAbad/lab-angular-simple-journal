/*jshint esversion:6*/

const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');
const mongoose     = require('mongoose');
var cors         = require('cors');

mongoose.connect('mongodb://localhost/journal-development');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';
app.locals.body = 'Pagina de layout';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);


const index = require('./routes/index');
//const index = require('./routes/api/journal-entries');
//const journalEntries = require('./routes/api/journal-entries');
//const prueba =require('/prueba');

app.use('/', index);
//app.use('/prueba',prueba);


app.get('/', (req, res, next) => {
  console.log("dentro de appget a raiz");
  let data = {
    name: "Ironhacker",
    bootcamp: "IronHack WebDev"
  };
  //res.send("prueba");
  res.render('index',data);
});


// rutas de prueba
// rutas de prueba
/*app.get('/', (request, response, next) => {
  console.log(request);
  response.send('<p>Welcome Ironhacker. :) en el raiz /</p>');
});*/
// our first Route

app.get('/prueba', (req, res, next) => {
  //console.log(req);
  res.render("./prueba/prueba");
  //response.send('<p>muestra ruta /prueba</p>');
});

/*
app.get('/hello', (request, response, next) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="stylesheets/style.css">
      </head>
      <body>
        This is my /hello rute
      </body>
    </html>
  `);
});

app.get('/users', (req, res) => {
  res.render("./prueba/prueba");
});

*/
/*
app.get('/users/:username', (req, res) => {
  res.send(`Hello, ${req.params.username}`);
});
*/


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

//getting roueter
var usersRouter = require('./routes/user')


var app = express ();


//setting view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//using the public 
app.use(express.static(path.join(__dirname, 'public')));

//using body parser
app.use(bodyParser.urlencoded({ extended: false }));

//using route
app.use('/', usersRouter);


//setting port
app.listen(3000,function(){
    console.log('app listening on port 3000')
})
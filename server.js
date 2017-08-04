var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

//listen on this port number
var port = 3000;

var app = express();

//view engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static folder for Angular stuff
app.use(express.static(path.join(__dirname,'client')));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/',index);
app.use('/api',tasks);

//start listening on the specified port number
app.listen(port,function(){
    console.log('API Server is listening on ' + port);
});

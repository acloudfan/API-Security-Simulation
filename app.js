var express = require('express')
var bodyParser = require('body-parser')

var sqlInjection = require(__dirname+'/sqlInjection')

var router = express.Router();
sqlInjection(router);

// Create the express app
app = express();

app.use(express.static(__dirname + '/public'));

// Setup the body parser
//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());//{type: '*/*'}));

// Setup the app to use the router
app.use(router);

// Start the listener
app.listen(3000);
console.log('Listening on 3000')
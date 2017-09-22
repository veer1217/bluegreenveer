/*jshint node:true*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as it's web server
// for more info, see: http://expressjs.com
var express = require('express');
var bodyParser = require('body-parser');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
//var cfenv = require('cfenv');

// create a new express server
var app = express();


// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

var bmwrapper = require('./public/modules/bmwrapper.js');
// get the app environment from Cloud Foundry
//var appEnv = cfenv.getAppEnv();

//var hostname = appEnv.bind;
//var hostport = appEnv.port;

var hostname = 'localhost';
var hostport = 3000;

app.get('/', function(req, res){
	res.redirect('./public/index.html');

});


app.post( '/authenticate', function(req, res){
	bmwrapper.login( req.body.username, req.body.password, function(err, result){
		if( err ){
			console.log('Error occurred during call to authenticate login: ' + err);
			return;
		}
		res.write( result );
		res.end();
	});
	
});

app.post( '/getdata', function(req, res){
	//console.log( 'getdata: ' + req.body.accesstoken);
	//console.log( 'getdata: ' + req.body.url);
	bmwrapper.getData( req.body, function(err, result){
		if( err ){
			console.log('Error occurred while getting data: ' + err);
			return;
		}
		res.write( result );
		res.end();
	});
	
	
});

// start server on the specified port and binding host
app.listen(hostport, hostname, function() {
	// print a message when the server starts listening
  console.log( 'server started...');
});
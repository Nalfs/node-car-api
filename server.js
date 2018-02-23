var express = require('express');
var app = express();



app.get('/about', function(req, res) {
	console.log("a client requested the about page");
  res.sendFile(__dirname + '/html/about.html');
});
app.get('/cars', function(req, res) {
	console.log("a client requested the cars page");
  res.sendFile(__dirname + '/html/cars.html');
});
app.get('/contact', function(req, res) {
	console.log("a client requested the contact page");
  res.sendFile(__dirname + '/html/contact.html');
});
app.get('/', function(req, res) {
	console.log("a client requested the index page");
  res.sendFile(__dirname + '/html/index.html');
});





app.use('/css', express.static('css'));
app.use('/images', express.static('images'));

app.listen(3000, function(){
	console.log("Server is booted");
});


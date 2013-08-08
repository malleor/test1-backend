var express = require("express");
var app = express();



var dataset = {
	ala: 'Ala ma kota.',
	jacek: 'Jacek ma dinozaura.',
	szymon: 'Szymon ma bzika.'
};


// middleware

app.use(express.logger());
//app.use(express.session());


// routes

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.get('/hello/:name', function(request, response) {
  response.send('Hello '+request.params.name+'!');
});

app.get('/data.json', function(request, response) {
  response.header('Access-Control-Allow-Origin', '*');
  response.json({hello: 'Hi there.'});
});

app.get('/api/:name', function(request, response) {
  response.header('Access-Control-Allow-Origin', '*');
  var name = request.params.name;
  var ans = dataset[name];
  response.json({ ans: ans });
});




var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

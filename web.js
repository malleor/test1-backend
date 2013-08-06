var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.get('/hello/:name', function(request, response) {
  response.send('Hello '+request.params.name+'!');
});


app.get('/data.json', function(request, response) {
  response.json({hello: 'Hi there.'});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var express = require('express');
var request = require("request");
var formidable = require("formidable");
var myParser = require("body-parser");
var app = express();

app.use(myParser.json());
app.use(myParser.urlencoded({ extended: false }));
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


function subscribeLeed(json){  
   request({
      uri: "http://23.239.7.5:3000/leed",
      method: "PUT",      
      json: json,
      timeout: 10000,
      followRedirect: true,
      maxRedirects: 10
  }, function(error, response, body) {
     if (error)  console.log(error);
     return body;
  });
}

app.get('/', function(request, response) {  
    response.render('land');    
});

app.put('/subscribe', function(request, response) {    
  try {
     json = request.body;      
      response.send(subscribeLeed(json));
      
  }catch(e){
     console.log(e);
     response.send({"status":"error"}); 
  }
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});




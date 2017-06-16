var express    = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/json
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(3000, function() {
    console.log("Listening on 3000.");
});

app.post("/chatroom/:chatroom", function (req, res) {
  
  console.log(req.body) 
  res.send(200, req.body);
  
});

app.post("/", function (req, res) {
  
  console.log(req.body) 
  res.send(200, req.body);
  
});

app.get("/", function (req, res) {

  var time = new Date();
  time = "Date now is " + time;
  
  var obj = {
      message: time
  }
    
  console.log("Get request came : ", obj);
  res.send(200, "Hi there");
});

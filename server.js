var express    = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/json
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(2222, function() {
    console.log("Listening on 2222.");
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
    
  console.log("Obj : ", obj);
  res.send(200, obj);
});

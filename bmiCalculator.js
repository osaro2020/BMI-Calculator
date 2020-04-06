const express = require('express');

//Allow to parse data from Server
const bodyParser = require('body-parser');

const app = express();

const port = 5000;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res) {

  var weight = parseInt(req.body.weight);

  var height = parseInt(req.body.height);

  var bmi = parseFloat(Number(703 * (weight / (height * height))).toFixed(1));

  var bmiRange;

  if (bmi < 18.5) {
    bmiRange = "Underweight";
  } else if (bmi > 18.5 && bmi < 24.9) {
    bmiRange = "Normal";
  } else if (bmi > 25 && bmi < 29.9) {
    bmiRange = "Overweight";
  } else if (bmi > 30) {
    bmiRange = "Obese";
  }


  //res.send("Result: " + bmi+"; Range: "+bmiRange);
  res.send("BMI: " + bmi+"<br>"+"BMI Range: "+bmiRange);
});

app.listen(port, function() {
  console.log("Server started on port " + port + ".");
});

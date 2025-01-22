const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;


const Patient = [{
  name : "Riyank",
  kidney: [{
    healthy: false
  }]
}]

// 1. GET - Going for a consultation to get a cheack up


app.get ('/', function(req, res) {
  const patientKidney = Patient[0].kidney;
  const numberOfKidney = patientKidney.length;
  let numberOfHealthyKidney = 0;
  
  for(let i = 0; i<patientKidney.length; i++) {
    if (patientKidney[i].healthy) {
         numberOfHealthyKidney ++
    }
  }

  const numberOfUnhealthyKidney = numberOfKidney - numberOfHealthyKidney;

  res.json([{
    numberOfKidney,
    numberOfHealthyKidney,
    numberOfUnhealthyKidney
  }])
})

// 2. POST - Going to get a new kidey inserted


app.post ('/', function(req,res) {
  const isHealthy = req.body.isHealthy;
  Patient[0].kidney.push({
    healthy: isHealthy
  })
  res.json({
    msg:"Done!"
  })
})

// 3. PUT - Going to get a kidney replaced


app.listen(port);
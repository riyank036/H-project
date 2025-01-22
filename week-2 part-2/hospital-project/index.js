const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;


var patient = [{
  name : "Riyank",
  kidney: [{
    healthy: false
  }]
}]

// 1. GET - Going for a consultation to get a cheack up


app.get ('/', function(req, res) {
  const patientKidney = patient[0].kidney;
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
  patient[0].kidney.push({
    healthy: isHealthy
  })
  res.json({
    msg:"Done!"
  })
})

// 3. PUT - Going to get a kidney replaced

app.put('/', function (req, res) {
  for(let i = 0; i<patient[0].kidney.length; i++) {
     patient[0].kidney[i].healthy = true
  }
  res.json({})
})

// 4. DELETE- patient can remove a kidney

app.delete('/', function (req, res) {
if(isThereAtleastOneKidney()) {
  const newKidneys = [];
  for (let i = 0; i<patient[0].kidney.length; i++) {
    if (patient[0].kidney[i].healthy){
      newKidneys.push({
        healthy: true
      })
    }
  }
  patient[0].kidney = newKidneys;
  res.json({
    msg:"Done!"
  })
  } else {
  res.status(411).json({
    msg: "You have no bad kidneys"
  });
}
})

function isThereAtleastOneKidney() {
  let atleastOneUnhealthyKidney = false
  for (let i = 0; i<patient[0].kidney.length; i++) {
     if (!patient[0].kidney[i].healthy){
    atleastOneUnhealthyKidney = true
    }
  }
  return atleastOneUnhealthyKidney
}


app.listen(port);

   





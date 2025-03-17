const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(cors()); 
app.use(express.json());

app.get('/sum', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send('Invalid numbers provided');
    }
    
    const sum = a + b;
    res.send(sum.toString());
});

app.get('/interest', (req,res) => {
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);
    const interest = (principal * rate * time) / 100;
    const total = principal + interest;
    res.send({
        total: total,
        interset: interest,
    })
});

app.listen(port, () => {
    console.log(`This port is running on ${port}`)
})
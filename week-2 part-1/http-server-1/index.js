    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    const port = process.env.PORT || 3000
    app.use(express.json());
    
    
    app.post('/riyank/patel', function(req,res) {
        const message = req.query.message
        console.log(message)
        res.send('Hello World!');
    })
    
    app.listen(port, function() {
        console.log(`Listening on port ${port}`);
    }); 
    
    




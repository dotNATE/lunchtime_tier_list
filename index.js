const express = require('express');
  
const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Success");
});

app.listen(PORT, (error) => {
    if(error) { 
        console.error(`Error starting server: ${error}`);
    } else {
        console.log(`Server running on port ${PORT}`)
    }
});

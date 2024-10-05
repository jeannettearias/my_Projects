// EXPRESS SERVER


// LIBRARY IMPORTS
const express = require('express');


// SERVER CREATION

const app = express();

// CONFIGURATIONS
const port = 3000;




// MySQL




// Ponemos a escuchar el servidor
app.get('/', (req, res) => {
    res.send('Hello from express.js!');
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);

});




// ENDPOINTS



// GET API



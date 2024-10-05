// EXPRESS SERVER


// LIBRARY IMPORTS
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const getConnection = require('./db/db');
const projectRoutes = require('./routes/projectsRoutes');

// SERVER CREATION

const app = express();

// CONFIGURATIONS
const port = 3000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Use project routes for '/projects' endpoint
app.use('/api', projectRoutes); // This mounts your routes at /api. So, /api/projects will work.

// Ponemos a escuchar el servidor

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);

});




// ENDPOINTS



// GET API



// ------------------------------
//CONNECTION WITH MYSQL 
// ------------------------------

const getConnection = require('../db/db');

// ------------------------------
// ENDPOINTS API
// ------------------------------
const getAllProjects = async (req, res) => {

    let conn;

    try {
        // Get the database connection
        conn = await getConnection();

        let selectQuery = 'SELECT * FROM myprojects.projects';
        const selectValues = [];

        const [results] = await conn.query(selectQuery, selectValues);

        res.json(results);

    }
    catch (error) {
        if (!conn) {
            res.status(500).send({
                success: false,
                error: 'System failed',
                details: error.message,
            })
            console.log(error);
        }
        //close connectión
        conn.close();

    }
};

module.exports = {
    getAllProjects,
};


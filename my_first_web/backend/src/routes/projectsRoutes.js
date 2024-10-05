const express = require('express');
const projectsController = require('../controllers/projectsController');

const router = express.Router();

router.get('/projects', projectsController.getAllProjects);




module.exports = router;

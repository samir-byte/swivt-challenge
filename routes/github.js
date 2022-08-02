const express = require('express');
const router = express.Router();
const githubController = require('../controllers/githubController');


router.get('/search',githubController.getRepositoriesController);

module.exports = router;
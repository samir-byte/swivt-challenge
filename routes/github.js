const express = require('express');
const router = express.Router();
const githubController = require('../controllers/githubController');

router.get('/', githubController.getRepositoryController);
router.get('/README.md', githubController.getMarkupController)
router.get('/search',githubController.searchRepositories);

module.exports = router;
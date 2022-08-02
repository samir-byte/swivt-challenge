var express = require("express");
let router = express.Router();
var repositoryRouter = require("./github");
var greetRouter = require("./greet")

router.use("/rest/v1/repositories", repositoryRouter);
router.use("/rest/v1/greet", greetRouter)


module.exports = router;
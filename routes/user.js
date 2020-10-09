var express = require('express');
var router = express.Router();
var userController = require('../controller/user');

//setting router
router.get ('/', userController.indexPage);

//handling the post request
router.post('/', userController.submitPage);

module.exports = router;
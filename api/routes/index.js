var express=require('express');
var router=express.Router();

var ctrUsers=require('../controllers/users.controller.js');

//authentication
router
.route('/users/register')
.post(ctrUsers.register);

router
.route('/users/login')
.post(ctrUsers.login);

module.exports = router;
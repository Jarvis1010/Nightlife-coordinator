var express=require('express');
var router=express.Router();

var ctrUsers=require('../controllers/users.controller.js');

//authentication
router
.route('/users/register')
.post(ctrUsers.register);

module.exports = router;
var express=require('express');
var router=express.Router();

var ctrUsers=require('../controllers/users.controller.js');
var ctrClubs=require('../controllers/clubs.controller.js');

//clubdata requests
router
.route('/clubs')
.get(ctrClubs.getClubs);

//authentication
router
.route('/users/register')
.post(ctrUsers.register);

router
.route('/users/login')
.post(ctrUsers.login);

module.exports = router;
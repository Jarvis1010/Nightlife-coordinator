var express=require('express');
var router=express.Router();

var ctrUsers=require('../controllers/users.controller.js');
var ctrBars=require('../controllers/bars.controller.js');

//clubdata requests
router
.route('/bars')
.get(ctrBars.getBars);

router
.route('/bars/photo/:id')
.get(ctrBars.getPhoto);

//authentication
router
.route('/users/register')
.post(ctrUsers.register);

router
.route('/users/login')
.post(ctrUsers.login);

module.exports = router;
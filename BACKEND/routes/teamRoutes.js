const express  = require('express');
const router =  express.Router();
const {createTeam,getTeamMembers} = require('../controllers/teamsController');

//API
router.post('/createTeam',createTeam);
router.get('/getTeam',getTeamMembers)

module.exports = router;
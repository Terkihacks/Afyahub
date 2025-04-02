const express  = require('express');
const router =  express.Router();
const {createTeam,getTeamMembers,getTeams} = require('../controllers/teamsController');


//API
router.post('/createTeam',createTeam);
router.get('/getTeamMembers',getTeamMembers);
router.get('/getTeams',getTeams);

module.exports = router;
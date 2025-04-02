const express  = require('express');
const router =  express.Router();
const{createTeamActivity,getActivities,updateActivities,deleteTeamActivity} = require('../controllers/teamActivitiesController');

//APIS
router.post('/create', createTeamActivity);
router.get('/getActivities', getActivities);
router.put('/update/:id', updateActivities);
router.delete('/delete/:id', deleteTeamActivity);

module.exports = router;
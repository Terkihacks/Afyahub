const express = require('express');
const router = express.Router()
const {createAdmin,LoginAdmin} = require('../controllers/adminController') 

router.post('/register',createAdmin)
router.post('/login',LoginAdmin)

module.exports = router;
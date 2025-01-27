const express = require('express');
const {createUser, login, VerifyUser} = require('../controller/userController')

const router = express.Router()

router.post('/signup', createUser)
router.post('/login', login)

module.exports = router
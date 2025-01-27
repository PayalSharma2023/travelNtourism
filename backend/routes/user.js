const express = require('express');
<<<<<<< HEAD
const {createUser, login, VerifyUser} = require('../controller/userController')

const router = express.Router()

router.post('/signup', createUser)
router.post('/login', login)

module.exports = router
=======
const router = express.Router();

router.post('/signup');
router.post('/login');

module.exports = router;
>>>>>>> 2e6af62566a6a7f44a18f261bf8148cb7f8e3eb2

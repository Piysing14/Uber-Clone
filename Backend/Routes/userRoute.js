const express = require('express')
const router = express.Router();

const {body}= require('express-validator')
const userController = require('../Controllers/userController')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullName.firstName').isLength({min:3}).withMessage('First name must be 3 characters long'),
    body('fullName.LastName').isLength({min:3}).withMessage('Last name must be 3 characters long'),
    body('password').isLength({min:3}).withMessage('Password name must be 3 characters long'),

],userController.registerUser)
module.exports = router;
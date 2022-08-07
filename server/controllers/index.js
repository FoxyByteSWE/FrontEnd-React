const express = require('express');
//const { loginCheck } = require('./middlewares/auth.js');
const router = express.Router();
const { postRegister,postLogin,putUpdate } = require('./user');
const { getRestaurants, getTopRetaurants } = require('./restaurant');

//router.get('/users',loginCheck, getUsers); // for test


router.get("/restaurants", getRestaurants);
router.get("/top-restaurants", getTopRetaurants);
router.post('/register', postRegister);
router.post('/login', postLogin);
router.put('/update', putUpdate);

module.exports = router;    
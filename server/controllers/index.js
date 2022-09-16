const express = require('express');
//const { loginCheck } = require('./middlewares/auth.js');
const router = express.Router();
const { postRegister,postLogin,putUpdate } = require('./user');
const { getRestaurants, getTopRetaurants } = require('./restaurant');
const { deleteFav, postFav } = require('./favourite');
const { getSearch } = require('./search');

//router.get('/users',loginCheck, getUsers); // for test

/**
 * @swagger
 * /restaurants: 
 *   get:
 *     description: Endpoint for getting all restaurants available in the database
 *     responses:
 *       200:
 *         description: Returns the restaurants with all available details.
 */
router.get("/restaurants", getRestaurants);
/**
 * @swagger
 * /top-restaurants: 
 *   get:
 *     description: Endpoint for getting top 3 restaurants rated by ranking service
 *     responses:
 *       200:
 *         description: Returns the top 3 restaurants with all available details.
 */
router.get("/top-restaurants", getTopRetaurants);
/**
 * @swagger
 * /register: 
 *   post:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         in: formData
 *         required: true
 *         type: string
 *       - name: email
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         in: formData
 *         required: true
 *         type: string
 *     description: Endpoint to post a new user wanting to signup on our webapp
 *     responses:
 *       200:
 *         description: successful signup
 *       500:
 *         description: something bad happend
 */
router.post('/register', postRegister);
/**
 * @swagger
 *
 * /login:
 *   post:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         in: formData
 *         required: true
 *         type: string
 *     description: Endpoint to post an existing user wanting to login on our webapp
 *     responses:
 *       200:
 *         description: successful signup
 *       500:
 *         description: something bad happend
 */
router.post('/login', postLogin);
router.put('/update', putUpdate);
/**
 * @swagger
 *
 * /fav:
 *   post:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user_id
 *         in: formData
 *         required: true
 *         type: string
 *       - name: place_id
 *         in: formData
 *         required: true
 *         type: string
 *     description: Endpoint to insert a new favaourite place identified with placeId for the user with userId
 *     responses:
 *       200:
 *         description: successful signup
 *       500:
 *         description: something bad happend
 */
router.post('/fav', postFav);
/**
 * @swagger
 *
 * /fav:
 *   put:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user_id
 *         in: formData
 *         required: true
 *         type: string
 *       - name: place_id
 *         in: formData
 *         required: true
 *         type: string
 *     description: Endpoint to delete an existing place identified with placeId among the favaourite restaurants of the user with userId(which is the user's email)
 *     responses:
 *       200:
 *         description: successful signup
 *       500:
 *         description: something bad happend
 */
router.put('/fav', deleteFav);
/**
 * @swagger
 * /search: 
 *   get:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: s
 *         in: query
 *         required: true
 *         type: string
 *     description: Endpoint for getting the restaurants having the word entered by the user in any of it's title or location
 *     responses:
 *       200:
 *         description: Returns the place found containing that word
 */
router.get("/search", getSearch);

module.exports = router;    
const express = require('express');
const { identifier } = require('../middlewares/identification');
const postsController = require('../controllers/postsController');
const router = express.Router();

// router.get('/all-posts',postsController.signup);
// router.get('/single-post',postsController.signin);
// router.post('/create-post',identifier,postsController.signout);


// router.patch(
//     '/update-post',
//     identifier,
//     postsController.sendVerificationCode
// );


// router.delete(
//     '/delete-post',
//     identifier,
//     postsController.verifyVerificationCode
// );

module.exports = router;
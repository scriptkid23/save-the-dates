const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
const auth = require('../auth');

const authController = require("../../controllers/authentication.controller");
//auth not required

router.post("/auth/register",auth.optional,authController.register);
router.post("/auth/login",auth.optional,authController.Login);
router.post("/auth/signup",authController.Signup);
router.post("/auth/changepassword",authController.ChangePassword);
router.post("/auth/forgotpassword",authController.ForgotPassword);
router.post("/auth/logout",auth.required,authController.Logout);
// router.post("/users/signup", users_controller.signup);

// router.post(
//   "/users/change_password",
//   users_controller.change_password
// );
// router.post(
//   "/users/forgot_password",
//   users_controller.forgot_password
// );
// router.post("/users/logout", auth.required, users_controller.logout);

module.exports = router;
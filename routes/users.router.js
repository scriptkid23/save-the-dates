const express = require("express");
const router = express.Router();
const passport = require("passport");

const authController = require("../controllers/authentication.controller");

//auth not required
router.post("/auth/login",authController.Login);
router.post("/auth/signup",authController.Signup);
router.post("/auth/changepassword",authController.ChangePassword);
router.post("/auth/forgotpassword",authController.ForgotPassword);
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
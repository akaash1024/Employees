

const authRouter = require("express").Router()
const authController = require("../controllers/auth.controller")
const isAuthenicated = require("../middlewares/isAuthenicated.middleware")
const isValidate = require("../middlewares/isValidate.middleware")
const { signupSchema, loginSchema } = require("../utils-validation/auth.validation")


authRouter.route("/register").post(authController.register)

authRouter.route("/login").post(authController.login)

authRouter.route("/user").get(isAuthenicated, authController.user);


module.exports = authRouter

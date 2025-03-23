const employeeController = require("../controllers/employee.controller")
const isAuthenicated = require("../middlewares/isAuthenicated.middleware")
const upload = require("../middlewares/multer.middleware")


const employeeRouter = require("express").Router()



employeeRouter.route("/create").post(isAuthenicated, upload.single("avatar"), employeeController.addEmployee)

employeeRouter.route("/").get(isAuthenicated, employeeController.getEmployees)
employeeRouter.route("/:id").get(isAuthenicated, employeeController.getEmployeeById)

employeeRouter.route("/update/:id").patch(isAuthenicated, employeeController.updateEmployee)
employeeRouter.route("/delete/:id").delete(isAuthenicated, employeeController.deleteEmployee)

module.exports = employeeRouter





require("dotenv").config()
const express = require("express")
const connectDB = require("./database/db")
const errorMiddleware = require("./middlewares/error.middleware")
const authRouter = require("./routes/auth.route")
const employeeRouter = require("./routes/employee.route")
const app = express()
const cors = require("cors")



//! middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))




// ! routes
app.use("/api/auth", authRouter)
app.use("/api/employee", employeeRouter)


// ! error handling part
app.use(errorMiddleware)

const PORT = process.env.PORT
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`⚙️  Server is listening at http://localhost:${PORT}`);

    })
})
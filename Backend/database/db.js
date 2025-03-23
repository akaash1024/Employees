const mongoose = require("mongoose")

require("dotenv").config()



const URI = process.env.MONGO_URL
const connectDB = async () => {
    try {
        await mongoose.connect(URI)
        console.log(`🗄️Database connected`);
    } catch (error) {
        console.error(error)
    }
}

module.exports = connectDB
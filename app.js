const express = require("express");
const app = express();
const morgan = require("morgan")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const expressValidator = require("express-validator")

dotenv.config();

// db
mongoose.connect(process.env.MONGO_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true })
.then (() => {
    console.log("DB Connected")
})

mongoose.connection.on('error', err => {
    console.log(`DB Connection error ${err.message}`)
})

// routes 
const postRoutes = require("./routes/post");

// middleware
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(expressValidator())
app.use("/", postRoutes)


const port = 8080;
app.listen(port, () => {
    console.log(`Node API is listening on ${port}`);
})
require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const http = require('http')


//models
const Todo = require("./models/order")

//defining Routes
const order = require("./routes/order");





mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNETED");
});

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//calling routes
app.use("/api", order);






const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`app is running at ${port}`);
})


require('dotenv').config(); //this module loads all environment variables to hash data coming in from database
const express = require('express');
         app  = express();
const bodyParser = require('body-parser');
const errorHandler = require("./handlers/error");
const authRoutes = require('./routes/auth')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.get("/", (req, res) => res.send("Connected"))
app.use("/api/auth", authRoutes);

//server all routes got through here error handlers
app.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err)
})

 // Authentication routes
app.use(errorHandler);

app.listen("3001", ()=> console.log("server has started..."))
const express = require('express');
         app  = express();
const bodyParser = require('body-parser');
const errorHandler = require("./handlers/error");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.get("/", (req, res) => res.send("Connected"))

//server all routes got through here error handlers
app.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err)
})

app.use(errorHandler);

app.listen("3001", ()=> console.log("server has started..."))
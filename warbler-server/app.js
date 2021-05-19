require('dotenv').config(); //this module loads all environment variables to hash data coming in from database
const express = require('express');
         app  = express();
const bodyParser = require('body-parser');
const errorHandler = require("./handlers/error");
const authRoutes = require('./routes/auth')
const messageRoutes = require("./routes/message")
const { loginIsRequired, ensureCorrectUser} = require("./middleware/auth")
const db = require('./models')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use("/api/auth", authRoutes);
app.use('/api/users/:id/message', loginIsRequired, ensureCorrectUser, messageRoutes)

//server all routes got through here error handlers
app.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err)
})

app.get("/api/messages", loginIsRequired, function (req, res, next) {
    try{
        let messages = db.Message.find()
        .sort({createdAt: "desc"})
        .populate("user", {
            username:true,
            profileImageUrl: true
        })
        return res.status(200).json(messages)
    }catch(err){
        return next(err)
    }
})

 // ERROR handler
app.use(errorHandler);

app.listen("3001", ()=> console.log("server has started..."))
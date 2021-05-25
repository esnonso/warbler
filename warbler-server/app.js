require('dotenv').config(); //this module loads all environment variables to hash data coming in from database
const express = require('express');
const cors = require('cors');
         app  = express();
const bodyParser = require('body-parser');
const errorHandler = require("./handlers/error");
const authRoutes = require('./routes/auth');
const messageRoutes = require("./routes/message");
const { loginIsRequired, ensureCorrectUser} = require("./middleware/auth");
const db = require('./models');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


app.get("/api/messages", loginIsRequired, async function (req, res, next) {
    try{
        let messages = await db.Message.find()
        .sort({ createdAt:"desc" })
        .populate("user", {
            username:true,
            profileImageUrl: true
        })
        return res.status(200).json(messages)
    }catch(err){
        return next(err)
    }
})

app.use("/api/auth", authRoutes);
app.use('/api/users/:id/message', loginIsRequired, ensureCorrectUser,  messageRoutes)

//server all routes got through here error handlers
app.use((req, res, next) => {
    let error = new Error("Not Found");
    error.status = 404;
    next(error)
})


 // ERROR handler
app.use(errorHandler);

app.listen("3001", ()=> console.log("server has started..."))
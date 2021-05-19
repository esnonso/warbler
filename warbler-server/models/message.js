const mongoose = require('mongoose');
const User = require('./user');

const messageSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true,
        maxLength: 160 //specifies the length of messages
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps:true
})

messageSchema.pre("remove", async function(req, res, next){
    try{
        //find a user
        let userId = await User.findById(this.user)
        //remove the message
        userId.message.remove(this.id)
        await user.save()
        return next();
    }catch(err){
        return next(err);
    }
})

const Message = mongoose.model("Message", messageSchema)

module.exports = Message;
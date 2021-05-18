const db = require('../models');
const jwt = require('jsonwebtoken');

exports.signin = async function(req, res, next){
    try{
        let user = await db.User.findOne({
        email:req.body.email
        });
        let {id, username, profileImageUrl} = user
        let isMatch = await user.comparePassword(req.body.password)
        if (isMatch) {
            let token = jwt.sign({
                id,
                username,
                profileImageUrl
            }, 
            process.env.SECRET_KEY
        );
        return res.status(200).json({
            id,
            username,
            profileImageUrl,
            token
        })
        }else{
            return next({
                status:400,
                message: "Invalid email or password"
            })
        }
    }catch(err){
        return next({
            status:400,
            message: err.message
        })
    }
}

exports.signup = async function(req, res, next){
    try{
        //create a user
        let user = await db.User.create(req.body)
        //values that are passed to the token that when i decode them I can see them
        let {id, username, profileImageUrl} = user
        //create a token
        let token = jwt.sign({
            id,
            username,
            profileImageUrl
        },
        //pass in a secret key
        process.env.SECRET_KEY
        );
        return res.status(200).json({
            id,
            username,
            profileImageUrl,
            token
        })
        
    }catch(err){
        // code if validation fails
        if(err.code === 11000){
            err.message = "Sorry That username and/or password is taken"
        }
        return next({
            status:400,
            message:err.message
        })
    }
}
require('dotenv').config()
const { request } = require('express');
const jwt = require("jsonwebtoken");


exports.loginIsRequired =  function(req, res, next){
        try{
            const authHeader = req.headers.authorization;
            if(authHeader){
                const token = authHeader.split(' ')[1];
                jwt.verify(token, process.env.SECRET_KEY, (err, user)=> {
                    if(err){
                        return res.status(403)
                    }
                    req.user = user;
                    next()
                })
            }else{
                return next({
                    status:403,
                    message:"You are not properly logged in"
                })
            }
       
        }catch(err){
            return next({
                status:403,
                message:"You are not properly logged in" 
            })
        }
}

exports.ensureCorrectUser =  function(req, res, next){ 
    try{
        const authHeader = req.headers.authorization;
            if(authHeader){
                const token = authHeader.split(' ')[1];
                jwt.verify(token, process.env.SECRET_KEY, (err, user)=> {
                    if(err){
                       return res.status(403)
                    }
                    req.user = user
                   if(req.user.id === req.params.id){
                       next()
                   }
                })
            }else{
                return next({
                    status:403,
                    message:"Unauthorized"
                })
            }
    }catch(e){
        return next({
            status:403,
            message:"Unauthorized"
        })
    }
}


/**
 *     jwt.verify(token, process.env.SECRET_KEY, function(err, decoded){
                if(decoded){
                    return next()
                }else{
                    return next({
                        status:401,
                        message:"Please Login First"
                    })
                }
        })

        //ensure correct user
         const token = req.headers.authorization.split('')[1]
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded){
            if(decoded && decoded.id === req.params.id){
                return next()
            }else{
                return next({
                    status:401, //code for unauthorized
                    message:"Unauthorized access"
                })
            }
        })
 */
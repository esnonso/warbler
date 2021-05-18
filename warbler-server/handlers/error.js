const { response } = require("express");

function errorHandler(err, req, res, next){
    return response.status(error.status || 500).json({
        err: {
            message: err.message || "Oops! Something went wrong"
        }
    })
}

module.exports = errorHandler;
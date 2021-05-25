const mongoose = require('mongoose');
mongoose.set("debug", true)
mongoose.connect('mongodb://localhost/todosBackend-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
    });

mongoose.Promise = Promise;

module.exports.User = require('./user');
module.exports.Message = require('./message');

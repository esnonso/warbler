const mongoose = require('mongoose');
mongoose.set("debug", true)
mongoose.connect('mongodb://localhost/todosBackend-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive:true,
    useMongoClient: true
    });

mongoose.Promise = Promise;

module.exports.User = require('./user');

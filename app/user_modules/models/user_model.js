// load mongoose since we need it to define a model
var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    firstname: String,
    lastname: String,
    emailaddress: String,
    role: String,
    password: String,
    gender: String,
    mobileno: String,
    datelog: Date
});



// app/routes.js

// load the todo model
var User = require('./models/user_model');

// expose the routes to our app with module.exports
module.exports = function (app) {

    // create todo and send back all todos after creation
    app.post('/user/create', function (req, res) {

        User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            emailaddress: req.body.emailaddress,
            role: req.body.role,
            password: req.body.password,
            gender: req.body.gender,
            mobileno: req.body.mobileno,
            datelog: Date()
        }, function (err, todo) {
            if (err)
                res.send(err);

                res.send('Added');
            // get and return all the todos after you create another
//            User.find(function (err, todos) {
//                if (err)
//                    res.send(err)
//                res.json(todos);
//            });
        });

    });

    app.get('/user/create', function (req, res){
       res.send('Hi'); 
    });

};
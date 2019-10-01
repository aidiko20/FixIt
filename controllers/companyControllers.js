const User = require("../database/models/user");

module.exports = {
    findAll: function (req, res) {
        User
        .find(req.query)
        .sort({ date:-1 })
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
    findByService: function (req, res) {
        console.log(req.params.serviceName);
        User.find({services: req.params.serviceName })
            .then(dbUser => {console.log(dbUser); res.json(dbUser)})
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        User
        .findById(req.params.id)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log("controller hit");
        User
        .create(req.body)
        .then(dbUser => res.json(dbUser))
        .catch (err => res.status(422).json(err));
    },
    update: function(req, res) {
         User  
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        User
        .findById({ _id: req.params.id })
        .then(dbUser => dbUser.remove())
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    }
  };
const express = require("express")
const router = express.Router()
const User = require("../database/models/user")
const passport = require("../passport")


router.post("/signup", (req, res) => {
    console.log("user signup");

    const { email, password, company, street, city, state, zip, tel, size, services, area } = req.body
    // ADD VALIDATION
    console.log("Request");
    console.log(req.body);
    User.findOne({ email: email }, (err, user) => {
        if (err) {
            console.log("User.js post error: ", err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the email: ${email}`
            })
        }
        else {
            console.log("user being created...");
            const newUser = new User({
                email: email,
                password: password,
                company: company,
                street: street,
                city: city,
                state: state,
                zip: zip,
                tel: tel,
                size: size,
                services: services,
                area: area
            })
            newUser.save((err, savedUser) => {
                console.log("saved  user")
                console.log(savedUser);
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post('/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            email: req.user.email
        };
        res.send(userInfo);
    }
)

router.get("/", (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.put ("/user", (req, res, next) => {
    console.log("Updating")
    console.log(req.user)
    if(req.user) {
        res.json({ user: req.user})
    } else {
        res.json({user: null})
    }
})
router.post("/logout", (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: "no user to log out" })
    }
})

router.get("/service", (req, res) => {
    console.log("SEARCH BY SERVICE");
    console.log(req);
    console.log(res);
    res.end();
})

module.exports = router
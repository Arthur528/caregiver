const express = require('express');
const router = express.Router();
const { Hospital, Shift, User } = require('../models');

// Home route - directs the user to a welcome page that allows them to login in.
router.get('/', (req, res) => {
    res.render("home", {
        logged_in: req.session.logged_in,
        user_id: req.session.user_id
    });
});

// Profile page - if a user is logged in, they are able to view their profile page.
router.get('/user/:id', (req,res) => {
    if(!req.session.logged_in) {
        return res.redirect("/login");
    };

    User.findByPk(req.params.id, {
    }).then(foundUser=> {
        if(!foundUser){
            return res.redirect("/404")
        }

        const hbsUser = foundUser.toJSON();
        hbsUser.logged_in=true;
        hbsUser.user_id=req.session.user_id;
        // console.log(hbsUser)
        // res.json(hbsUser)

        res.render("profile", hbsUser);
    })
});

// TODO: Edit profile page - if the user is logged in, they are able to edit their profile page.

// TODO: View all nurses page - if the user is logged in, they are able to view all the other nurses (users).

// Login route - if the user is not logged in, they are able to view the login page and login.
router.get('/login', (req,res) => {
    if(req.session.logged_in){
        return res.redirect("/")
    };
    res.render("login", {
        logged_in:false,
        user_id:null
    });
});

// Signup route - if the user is not logged in, they are able to view the signup page and signup.
router.get('/signup', (req,res) => {
    if(req.session.logged_in){
        return res.redirect("/")
    };
    res.render("signup", {
        logged_in:false,
        user_id:null
    });
});

// Hospital route - see all the hospitals we have in our database, and find nurses through there.
router.get("/hospitals", (req, res) => {
    // TODO: Do you need to be logged in to view the hospitals?
    Hospital.findAll({
        include: [Shift, User]
    }).then(hospitals => {
        const hospitalsArray = hospitals.map(hospital => hospital.toJSON());

        res.render("hospitals", {
            hospitals: hospitalsArray
        });

    }).catch(err => {
        console.log(err);
        res.status(500).json({err: "bad move bub"});
    });
});

// 404 catch all route - if the user goes to an undefined endpoint, they are served a 404.
// router.get("*" , (req,res)=>{
//     res.render("404")
// });

module.exports = router;
const express = require('express');
const router = express.Router();
const { Hospital, Shift, User } = require('../models');

// Home route - directs the user to a welcome page that allows them to login in.
router.get('/', (req, res) => {
    const hbsSession = {
        logged_in: req.session.logged_in,
        user_id: req.session.user_id
    };

    res.render("home", hbsSession);
});

// Profile page - if a user is logged in, they are able to view their profile page.

router.get('/find-ride', (req, res) => {
    console.log(req.session.logged_in);
    console.log(req.session.user_id);
    res.render("find-ride")
});

router.get('/contact-nurse', (req, res) => {
    console.log(req.session.logged_in);
    console.log(req.session.user_id);
    res.render("contact")
});

router.get('/profile', (req,res) => {
    if(!req.session.logged_in) {
        return res.redirect("/login");
    };

    User.findByPk(req.session.user_id, {
    }).then(foundUser=> {
        if(!foundUser){
            return res.redirect("/404")
        }
        const hbsUser = foundUser.toJSON();
        hbsUser.logged_in=true;

        res.render("profile", hbsUser);
    })
});

//User page - if a user is logged in, they are able to view other profile pages. 
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

// Profile page - if a user is logged in, they are able to view their profile page.
router.get('/profile', (req,res) => {
    if(!req.session.logged_in) {
        return res.redirect("/login");
    };

    User.findByPk(req.session.user_id, {
        include: [Hospital, Shift]
    }).then(foundUser=> {
        if(!foundUser){
            return res.redirect("/404")
        };

        const hbsUser = foundUser.toJSON();
        hbsUser.logged_in=true;

        res.render("profile", hbsUser);
    });
});

// TODO: Edit profile page - if the user is logged in, they are able to edit their profile page.

// All users page - if a user is logged in, they are able to view all other users.
router.get("/users", (req, res) => {
    if(!req.session.logged_in) {
        return res.redirect("/login");
    };

    User.findAll({
        include: [Hospital, Shift]
    }).then(users => {
        const usersArray = users.map(user => user.toJSON());

        const hbsUsers = {
            users: usersArray,
            logged_in: req.session.logged_in
        };

        res.render("users", hbsUsers);

    }).catch(err => {
        console.log(err);
        res.status(500).json({err: "bad move bub"});
    });
});

// User page - if a user is logged in, they are able to view other profile pages. 
router.get('/user/:id', (req,res) => {
    if(!req.session.logged_in) {
        return res.redirect("/login");
    };

    User.findByPk(req.params.id, {
    }).then(foundUser=> {
        if(!foundUser){
            return res.redirect("/404")
        };

        const hbsUser = foundUser.toJSON();
        hbsUser.logged_in=true;
        hbsUser.user_id=req.session.user_id;

        res.render("profile", hbsUser);
    });
});

// Contact user page - if a user is logged in, they can contact another user.
router.get('/contact-nurse', (req, res) => {
    if(!req.session.logged_in) {
        return res.redirect("/login");
    };

    const hbsSession = {
        logged_in: req.session.logged_in,
        user_id: req.session.user_id,
    };

    res.render("contact", hbsSession);
});

// Favorite users page - if a user is logged in, they can view the list of their favorite other users.
router.get("/favorites", (req, res) => {
    if(!req.session.logged_in){
        return res.redirect("/login");
    };
    
    User.findByPk(req.session.user_id, {
        include: ["FavoriteUsers", Hospital]
    }).then(users => {
        const userArray = users.toJSON();

        const hbsFavorites = {
            users: userArray,
            logged_in: req.session.logged_in
        };
        
        res.render("favorites", hbsFavorites);

    }).catch(err => {
        console.log(err);
        res.status(500).json({err: "bad move bub"});
    });
});

// Find a Ride - if a user is logged in, they can schedule a ride from another user.
router.get('/find-ride', (req, res) => {
    if(!req.session.logged_in) {
        return res.redirect("/login");
    };

    const hbsSession = {
        logged_in: req.session.logged_in,
        user_id: req.session.user_id,
    };

    res.render("find-ride", hbsSession);
});

// Hospital route - see all the hospitals we have in our database, and find nurses through there.
router.get("/hospitals", (req, res) => {
    Hospital.findAll({
        include: [Shift, User]
    }).then(hospitals => {
        const hospitalsArray = hospitals.map(hospital => hospital.toJSON());

        const hbsHospital = {
            hospitals: hospitalsArray,
            logged_in: req.session.logged_in
        };

        res.render("hospitals", hbsHospital);

    }).catch(err => {
        console.log(err);
        res.status(500).json({err: "bad move bub"});
    });
});

// 404 catch all route - if the user goes to an undefined endpoint, they are served a 404.
router.get("*" , (req, res) => {
    res.render("404");
});

module.exports = router;
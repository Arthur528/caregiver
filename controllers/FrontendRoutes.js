const express = require('express');
const router =express.Router();

// Home route - directs the user to a welcome page that allows them to login in.
router.get('/', async (req, res) => {
    res.render("home"),{
        logged_in:req.session.logged_id,
        nurse_id:req.session.nurse_id,
    }
});

// TODO: Profile page - if a user is logged in, they are able to view their profile page.

// TODO: Edit profile page - if the user is logged in, they are able to edit their profile page.

// TODO: View all nurses page - if the user is logged in, they are able to view all the other nurses (users).

// Login route - if the user is not logged in, they are able to view the login page and login.
router.get('/login',(req,res)=>{
    if(req.session.logged_id){
        return res.redirect("/")
    }
    res.render("login",{
        logged_in:false,
        nurse_id:null
    })
});

// Signup route - if the user is not logged in, they are able to view the signup page and signup.
router.get('/signup',(req,res)=>{
    if(req.session.logged_in){
        return res.redirect("/")
    }
    res.render("signup",{
        logged_in:false,
        nurse_id:null
    })
});

// 404 catch all route - if the user goes to an undefined endpoint, they are served a 404.
router.get("*" , (req,res)=>{
    res.render("404")
});

module.exports = router;
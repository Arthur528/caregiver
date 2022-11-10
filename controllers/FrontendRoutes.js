const express = require('express');
const router =express.Router();



router.get('/', async (req, res) => {
    res.render("home"),{
        loggedIn:req.session.loggedIn,
        nurse_id:req.session.loggedIn
    }
});


router.get('/login',(req,res)=>{
    if(req.session.loggedIn){
        return res.redirect(`/user/${req.session.nurse_id}`)
    }
    res.render("login",{
        loggedIn:false,
        nurse_id:null
    })
});



router.get('/sign-up',(req,res)=>{
    if(req.session.loggedIn){
        return res.redirect(`/user/${req.session.nurse_id}`)
    }
    res.render("Sign-up",{
        loggedIn:false,
        nurse_id:null
    })
});


router.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/")
});







module.exports = router;
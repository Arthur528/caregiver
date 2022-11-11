const express = require('express');
const { User } = require('../models');
const router =express.Router();

router.get('/', async (req, res) => {
    res.render("home"),{
        logged_in:req.session.logged_id,
        nurse_id:req.session.nurse_id,
    }
});

router.get('/login',(req,res)=>{
    if(req.session.logged_id){
        return res.redirect("/")
    }
    res.render("login",{
        logged_in:false,
        nurse_id:null
    })
});

router.get('/signup',(req,res)=>{
    if(req.session.logged_in){
        return res.redirect("/")
    }
    res.render("signup",{
        logged_in:false,
        nurse_id:null
    })
});

// router.get("*" , (req,res)=>{
//     res.render("404")
// });

//profile route
router.get('/user/:id',(req,res)=>{
    User.findByPk(req.params.id, {
    }).then(foundUser=> {
        const hbsUser = foundUser.toJSON();
        console.log(hbsUser)
        res.json(hbsUser)
    })
    if(req.session.logged_in){
        return res.redirect("/")
    }
    res.render("profile",{
        logged_in:false,
        nurse_id:null
    })
});


module.exports = router;
const express = require('express');
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







module.exports = router;
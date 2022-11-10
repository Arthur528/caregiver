const express = require('express');
const router =express.Router();
const {User, Hospital} = require('../models');





router.get("/sessions", (req,res) =>{ 
    res.json(req.session)
})

 
router.get("/profile", (req,res) =>{
    if(!req.session.logged_id){
        return res.redirect("/home")
    }
    User.findByPk(req.session.user_id)
    res.json("profile")
});

router.post("/sign-up",(req,res)=>{
    User.create({
        nurse_id:req.body.nurse_id,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phone_number:req.body.phone_number,
        bio:req.body.bio,
        referral:req.body.referral,
        is_driving:req.body.is_driving,
        shift_info:req.body.shift_info,
        street_address:req.body.street_address,
        city:req.body.city,
        zip_code:req.body.zip_code,
        license_plate:req.body.license_plate,
        car_make:req.body.car_make,
        car_model:req.body.car_model,
        car_color:req.body.car_color,
        HospitalId:req.body.HospitalId,
        ShiftId:req.body.ShiftId,

    }).then(newUser=>{  
        req.session.userId=newUser.id;
        req.session.loggedIn=true;
        res.json(newUser)
    
     }).catch(err=>{
        console.log(err)
        res.status(500).json({
        })
 })
})
    

// router.get('/', async (req, res) => {
//     try {
//       const users = await Users.findAll();
//         res.status(200).json(users);
//     } catch (err){
//       console.log(err)
//     }
//   });


router.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/")
});



router.post('/login' , async (req, res) => { 
    try {
        const loginData = await Users.findByPk({ where: { username :req.body.username}});
        if (!loginData) {
            res
            .status(400)
            .json({ message: "Incorrect username or password"})
            return;
        }
        const passwordCheck = await loginData.checkPassword(req.body.password);
        if (!loginData) {
            res
                .status(400)
                .json({ message: "Incorrect username or password"})
                return;
        }

        req.session.save(() => {
            req.session.nurse_id = loginData.nurse_id;
            req.session.logged_in = true;
            
            res.json({user : loginData, message: "log in succesful"});
        });
        } catch (err) {
            res.status(400).json(err);
          }
        });

       

module.exports = router;
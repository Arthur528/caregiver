const express = require('express');
const router =express.Router();
const {User} = require('../models');
const bcrypt = require("bcrypt");






 
// router.get("/profile", (req,res) =>{
//     if(!req.session.logged_id){
//         return res.redirect("home")
//     }
//     User.findByPk(req.session.user_id)
//     res.json("profile")
// });

router.post("/signup",(req,res)=>{
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
        req.session.nurse_id=newUser.id;
        req.session.logged_in=true;
        res.json(newUser)
    
     }).catch(err=>{
        console.log(err)
        res.status(500).json({
        })
 })
})
    



router.get("/logout",(req,res)=>{
    req.session.destroy();
    res.json({msg:"successfully logged out!"})
});



router.post('/login' , (req, res) => {
    User.findOne({
        where:{
            email:req.body.email 
        }
    }).then(foundUser => {
        if(!foundUser){
            return res.status(401).json({msg:"Your email or password is incorrect!"})
        }else if(!bcrypt.compareSync(req.body.password, foundUser.password)){
            res.status(401).json({msg:"Your email or password is incorrect!" })
        } else {
            req.session.nurse_id=foundUser.id;
            req.session.logged_in=true;
            res.json(foundUser);
        }
    
    }).catch(err => {
        console.log(err)
        res.status(500).json({err})
    })


});

router.delete('/:id', async (req, res) => {
    if(!req.session.logged_in){
        return res.status(401).json({msg:"Please login!"})
      }
    
    try {
      const userDelete = await User.destroy({
        where: {
          id:req.params.id
        }
      })
      if (!userDelete) {
        return res.status(400).json({message: 'User not found!'})
     }
  
    res.status(200).json(userDelete)
  } catch (err) {
    console.log(err)
  }
  });

  router.put('/:id', async (req, res) => {
    try {
      const userUpdate = await User.update(req.body, {
        
        
        where:{
          id:req.params.id,
        
        }
      })
  
      if (!userUpdate) {
          return res.status(400).json({message: 'User not found!'})
       }
  
      res.status(200).json(userUpdate)
  } catch (err) {
      console.log(err)
  }
  });
  

       

module.exports = router;
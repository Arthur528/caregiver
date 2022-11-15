const express = require('express');
const router =express.Router();
const {User, Shift, Hospital} = require('../models');
const bcrypt = require("bcrypt");

// A GET route for getting all the users in the database. TODO: DELETE?
router.get("/", (req,res) =>{
  User.findAll({
  }).then(users=>{
    res.json(users);
  }).catch(err=> {
    console.log(err);
    res.status(500).json({msg: "Can't find the users."});
  });
});

// A POST route for adding a new user to the database, and creating a logged in session for that new user.
router.post("/signup", (req,res) => {
  User.create({
    nurse_id: req.body.nurse_id,
    name: req.body.name,
    email:req.body.email,
    password:req.body.password,
    phone_number:req.body.phone_number,
    // bio:req.body.bio,
    // referral:req.body.referral,
    // is_driving:req.body.is_driving,
    // shift_info:req.body.shift_info,
    // street_address:req.body.street_address,
    // city:req.body.city,
    // zip_code:req.body.zip_code,
    // license_plate:req.body.license_plate,
    // car_make:req.body.car_make,
    // car_model:req.body.car_model,
    // car_color:req.body.car_color,
    // HospitalId:req.body.HospitalId,
    // ShiftId:req.body.ShiftId,
  }).then(newUser => {  
    req.session.user_id=newUser.id;
    req.session.logged_in=true;
    res.json(newUser);
  }).catch(err => {
    console.log(err);
    res.status(500).json({msg: "Unable to create an account."});
  });
});

// A GET route for logging out a user and ending their login session.
router.get("/logout",(req,res)=>{
  req.session.destroy();
  res.redirect("/");
});

// A POST route for letting a user login and create a login session for them.
router.post('/login', (req, res) => {
  User.findOne({
    where:{
      email:req.body.email 
    }
  }).then(foundUser => {
    if(!foundUser){
      return res.status(401).json({msg:"Your email or password is incorrect!"});
    }else if(!bcrypt.compareSync(req.body.password, foundUser.password)){
      return res.status(401).json({msg:"Your email or password is incorrect!" });
    } else {
      req.session.user_id=foundUser.id;
      req.session.logged_in=true;
      res.json(foundUser);
    };
  }).catch(err => {
    console.log(err);
    res.status(500).json({msg: "Can't login to profile."});
  });
});

// A DELETE route for removing a user from the database. TODO: Needs to logout the user when deleted. -- Delete Profile Button on /profile -- Needs to log out user and reroute to home page.
router.delete('/:id', async (req, res) => {
  if(!req.session.logged_in){
    return res.status(401).json({msg:"Can't delete your profile if you aren't logged in."})
  };
    
  try {
    const userDelete = await User.destroy({
      where: {
        id: req.params.id
      }
    });
    
    if (!userDelete) {
      return res.status(400).json({message: 'User not found.'})
    };
  
    res.status(200).json(userDelete);
  } catch (err) {
    console.log(err);
  };
});

// A PUT route for updating a user's information.
router.put('/:id', async (req, res) => {
  try {
    const userUpdate = await User.update(req.body, {
      where:{
        id:req.params.id,
      }
    });

    if (!userUpdate) {
      return res.status(400).json({message: 'User not found!'});
    };

    res.status(200).json(userUpdate);
  } catch (err) {
    console.log(err);
  };
});


router.delete('/favorites', async (req, res) => {
  if(!req.session.logged_in){
    return res.status(401).json({msg:"Can't delete your profile if you aren't logged in."})
  };
    
  try {
    const userDelete = await User.destroy({
      where: {
        id:req.params.id
      }
    });
    
    if (!userDelete) {
      return res.status(400).json({message: 'User not found.'})
    };
  
    res.status(200).json(userDelete);
  } catch (err) {
    console.log(err);
  };
});

// TODO: A DELETE route for a hospital from a user's hospital table. -- Remove Hospital Button on /profile
router.delete('hospital/delete/:hospital_id', async (req, res) => {
  if(!req.session.logged_in){
    return res.status(401).json({msg:"Can't delete a hospital from your profile if you aren't logged in."});
  };
    
  try {
    User.findByPk(req.session.user_id)
    .then(loggedinUser => {
      loggedinUser.removeHospital(req.params.hospital_id)
      .then(user => {
        console.log(user);
        res.send('Hospital removed!');
      });
    });
  } catch (err) {
    console.log(err);
  };
});

// TODO: A DELETE route for a shift from a user's shift table. -- Remove Shift Button on /profile

// TODO: A DELETE route for a old favorite nurse (remove a nurse to user's favorites) -- Remove Favorite Button on /favorites -- ALSO NEED THE BUTTON ADDED

// TODO: A PUT route for a new favorite nurse (add a nurse to user's favorites) -- Add to Favorites on /users -- ALSO NEED THE BUTTON ADDED

module.exports = router;
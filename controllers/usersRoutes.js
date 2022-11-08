const express = require('express');
const router =express.Router();


router.get('/', async (req, res) => {
    res.render("home")
})
 
router.get("/sessions", (req,res) =>{ 
    res.json(req.session)
})

 
router.get("/profile", (req,res) =>{
    if(!req.session.logged_id){
        return res.redirect("home")
    }
    User.findByPk(req.session.user_id)
    res.json("profile")
})


// router.get('/', async (req, res) => {
//     try {
//       const users = await Users.findAll();
//         res.status(200).json(users);
//     } catch (err){
//       console.log(err)
//     }
//   });



// router.post('/login' , async (req, res) => { 
//     try {
//         const loginData = await Users.findByPk({ where: { username :req.body.username}});
//         if (!loginData) {
//             res
//             .status(400)
//             .json({ message: "Incorrect username or password"})
//             return;
//         }
//         const passwordCheck = await loginData.checkPassword(req.body.password);
//         if (!loginData) {
//             res
//                 .status(400)
//                 .json({ message: "Incorrect username or password"})
//                 return;
//         }

//         req.session.save(() => {
//             req.session.user_id = loginData.id;
//             req.session.logged_in = true;
            
//             res.json({user : loginData, message: "log in succesful"});
//         });
//         } catch (err) {
//             res.status(400).json(err);
//           }
//         });

module.exports = router;
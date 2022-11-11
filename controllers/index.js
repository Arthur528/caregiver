const router = require('express').Router();
const usersRoutes = require("./usersRoutes")
const FrontendRoutes = require("./frontendRoutes")
router.use("/api/users", usersRoutes)

//added 
//const profileRoute = require("./profileRoute")

router.use("/",FrontendRoutes)
router.use(usersRoutes)
//router.use(profileRoute)

router.get("/session" , (req,res) => {
    res.json(req.session)
});

module.exports = router
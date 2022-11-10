const router = require('express').Router();
const usersRoutes = require("./usersRoutes")
const FrontendRoutes = require("./FrontendRoutes")

router.use(FrontendRoutes)
router.use(usersRoutes)

router.get("/session" , (req,res) => {
    res.json(req.session)
});

module.exports = router
const router = require('express').Router();

const usersRoutes = require("./usersRoutes");
router.use("/api/users", usersRoutes)
const FrontendRoutes = require("./FrontendRoutes")
router.use("/",FrontendRoutes)

router.get("/session" , (req,res) => {
    res.json(req.session);
});

module.exports = router;
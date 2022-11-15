const router = require('express').Router();

const usersRoutes = require("./usersRoutes");
router.use("/api/users", usersRoutes);
const frontendRoutes = require("./frontendRoutes");
router.use("/", frontendRoutes);

router.get("/session" , (req,res) => {
    res.json(req.session);
});

module.exports = router;
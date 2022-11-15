const router = require('express').Router();

const usersRoutes = require("./usersRoutes");
router.use("/api/users", usersRoutes);
<<<<<<< HEAD
const frontendRoutes = require("./frontendRoutes");
router.use("/", frontendRoutes);
=======
const FrontendRoutes = require("./frontendRoutes");
router.use("/", FrontendRoutes);
>>>>>>> 971e70673e23cae669989351e5d67311a9c4ef2b

router.get("/session" , (req,res) => {
    res.json(req.session);
});

module.exports = router;
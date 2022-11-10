const router = require('express').Router();
const usersRoutes = require("./usersRoutes")
const FrontendRoutes = require("./FrontendRoutes")

router.use(FrontendRoutes)
router.use(usersRoutes)
module.exports = router
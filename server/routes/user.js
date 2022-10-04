var controller = require("../controllers");
const router = require("express").Router();

router.get("/subs", controller.user.getUsers);

module.exports = router;

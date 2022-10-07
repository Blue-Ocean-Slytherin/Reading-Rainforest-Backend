const homeControllers = require("../controllers/home.js");
const router = require("express").Router();

router.get('/users', homeControllers.getUsers);

module.exports = router;

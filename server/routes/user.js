var userControllers = require("../controllers/user");
const router = require("express").Router();

router.get('/users', userControllers.getUsers); // temp, just to see what's in DB

router.get('/:uid/', userControllers.getUserInfo);

module.exports = router;

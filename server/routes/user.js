var userControllers = require("../controllers/user");
const router = require("express").Router();

router.get('/users', userControllers.getUsers); // temp, just to see what's in DB

router.get('/:uid/', userControllers.getUserInfo);
router.post('/new', userControllers.makeNewUser);
router.patch('/:uid/book/:ISBN', userControllers.addNewBook);

router.delete('/:uid', userControllers.deleteUser);

module.exports = router;

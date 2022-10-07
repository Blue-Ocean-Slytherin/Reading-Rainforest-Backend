var userControllers = require("../controllers/user");
const router = require("express").Router();

router.get('/users', userControllers.getUsers); // temp, just to see what's in DB

router.get('/:uid/', userControllers.getUserInfo);
router.post('/new', userControllers.makeNewUser);
router.patch('/:uid/ISBN/:ISBN/bookName/:bookName', userControllers.addNewBook);
router.patch('/:uid/aboutMe', userControllers.patchAboutMe); // send aboutMe data in body

router.delete('/:uid', userControllers.deleteUser);
router.delete('/:uid/ISBN/:ISBN', userControllers.deleteBook);

module.exports = router;

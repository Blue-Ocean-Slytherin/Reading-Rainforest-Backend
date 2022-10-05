var controller = require("../controllers");
const router = require("express").Router();

router.get("/initSearchBooks", controller.search.initBooks);
router.get("/books/:searchInput", controller.search.searchBooks);

module.exports = router;

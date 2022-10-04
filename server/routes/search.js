var controller = require("../controllers");
const router = require("express").Router();

router.get("/initSearchBooks", controller.search.initBooks);

module.exports = router;

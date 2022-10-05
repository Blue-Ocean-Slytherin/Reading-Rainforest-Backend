var controller = require("../controllers");
const router = require("express").Router();

router.get("/trades", controller.trade.getAll);

module.exports = router;
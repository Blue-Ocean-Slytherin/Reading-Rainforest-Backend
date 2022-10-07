var controller = require("../controllers");
const router = require("express").Router();

router.get("/trades", controller.trade.getAll);

router.put("/status", controller.trade.updateOne);

router.put("/delete", controller.trade.deleteOne);

module.exports = router;
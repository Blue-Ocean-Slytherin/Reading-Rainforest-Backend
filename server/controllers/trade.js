var tradeModel = require("../models");

module.exports = {
  getAll: (req, res) => {
    tradeModel.trade.getAllTrades(req.query).then((response) => {
      res.status(200).json(response[0].trades);
    });
  },
};
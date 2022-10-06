var tradeModel = require("../models");

module.exports = {
  getAll: (req, res) => {
    tradeModel.trade.getAllTrades(req.query)
    .then((response) => {
      res.status(200).json(response[0].trades);
    });
  },
  updateOne: (req, res) => {
    tradeModel.trade.updateStatus(req.query)
      .then(() => {
        res.sendStatus(200)
      })
      .catch ((err) => res.sendStatus(500))
  }
};
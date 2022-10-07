var tradeModel = require("../models");

module.exports = {
  getAll: (req, res) => {
    tradeModel.trade.getAllTrades(req.query)
    .then((response) => {
      res.status(200).json(response[0].trades);
    });
  },
  updateOne: (req, res) => {
    tradeModel.trade.updateStatus(req.body)
      .then(() => {
        res.sendStatus(200)
      })
      .catch ((err) => res.sendStatus(500))
  },
  deleteOne: (req, res) => {
    tradeModel.trade.deleteTrade(req.body)
      .then(() => {
        res.sendStatus(200)
      })
      .catch ((err) => res.sendStatus(500))
  },
  addOne: (req, res) => {
    tradeModel.trade.addTrade(req.body)
      .then(() => {
        res.sendStatus(200)
      })
      .catch ((err) => res.sendStatus(500))
  },
  reviewAdd: (req, res) => {
    tradeModel.trade.addReview(req.body)
      .then(() => {
        res.sendStatus(200)
      })
      .catch ((err) => res.sendStatus(500))
  },
};
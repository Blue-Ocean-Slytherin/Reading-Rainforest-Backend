const User = require("../db/schema");

module.exports = {
  getAllTrades: (params) => {
    return User.find(params).select('trades').exec();
  },
  updateStatus: (params) =>  {
    return User.findOneAndUpdate({"uid":params.uid, "trades.transactionID":params.tradeId}, {$set: {"trades.$.status": params.status}});
  },
  deleteTrade: (params) => {
    return User.findOneAndUpdate({"uid": params.uid}, {$pull: {"trades": {"transactionID": params.tradeId} } })
  },
  addTrade: (params) => {
    const temp = {
      isbnUser: params.isbnUser,
      isbnTrader: params.isbnTrader,
      tradedToUser: params.tradedToUser,
      status: params.status,
      transactionID: params.transactionID
    }
    return User.updateOne({"uid": params.uid}, {$push: {"trades": temp}})
  },
  addReview: (params) => {
    return User.updateMany({"uid": params.uid}, {$inc: {"ratingTotal": parseInt(params.review), "ratingsCount": 1}});
  }
};
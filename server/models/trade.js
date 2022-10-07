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
  }

};
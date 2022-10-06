const User = require("../db/schema");

module.exports = {
  getAllTrades: (params) => {
    return User.find(params).select('trades').exec();
  },
  updateStatus: (params) =>  {
    // const tradeId = {_id: params.id};
    // return User.findOneAndUpdate({"trades._id": params.id}, {$set: {"trades.$": params.status}});
    return User.findOneAndUpdate({"uid":params.uid, "trades._id":params.tradeId}, {$set: {"trades.$.status": params.status}});
  },

};
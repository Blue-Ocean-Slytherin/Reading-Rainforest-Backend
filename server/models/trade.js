const User = require("../db/schema");

module.exports = {
  getAllTrades: (params) => {
    return User.find(params).select('trades -_id').exec();
  },
};
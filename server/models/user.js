const User = require("../db/schema");

module.exports = {
  getUsers: () => {
    console.log("in getinitialbooks");
    return User.find().limit(10);
  },
};

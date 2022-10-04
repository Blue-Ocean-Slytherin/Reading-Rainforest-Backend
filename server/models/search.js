const User = require("../db/schema");

module.exports = {
  getInitialBooks: () => {
    return User.find();
  },
};

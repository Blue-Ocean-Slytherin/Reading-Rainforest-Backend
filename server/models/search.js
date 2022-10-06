const User = require("../db/schema");

module.exports = {
  getInitialBooks: () => {
    return User.find();
  },
  searchBooks: async (params) => {
    return User.find({
      "books.bookName": params.searchInput,
    }).exec();
  },
};

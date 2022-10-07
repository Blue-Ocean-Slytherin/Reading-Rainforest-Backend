const User = require("../db/schema");

module.exports = {
  getInitialBooks: () => {
    return User.find();
  },
  searchBooks: async (params) => {
    console.log(params.searchInput);
    return await User.find({
      "books.bookName": { "$regex": params.searchInput, "$options": "i" },
    }).exec();
  },
};

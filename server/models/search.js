const User = require("../db/schema");

module.exports = {
  getInitialBooks: () => {
    return User.find();
  },
  searchBooks: async (params) => {
    var prom = await Promise.all(
      params.map((isbn) => {
        return User.find({ books: isbn }).exec();
      })
    );
    return prom;
  },
};

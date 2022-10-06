const User = require("../db/schema");

module.exports = {
  getInitialBooks: () => {
    return User.find();
  },
  searchBooks: async (params) => {
    console.log("test case 1: ", params.searchInput);
    return User.find({
      "books.bookName": params.searchInput,
    }).exec();
    // var prom = await Promise.all(
    //   params.map((isbn) => {
    //     return User.find({
    //       "books.bookName": params,
    //     }).exec();
    //   })
    // );
    // return prom;
  },
};

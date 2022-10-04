var searchModel = require("../models");
const axios = require("axios").default;

module.exports = {
  initBooks: (req, res) => {
    searchModel.search.getInitialBooks().then((response) => {
      res.status(200).json(response);
    });
  },
  searchBooks: (req, res) => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${req.params}`)
      .then((response) => {
        var onlyISBN = [];
        response.data.items.forEach((isbn) => {
          if (isbn.volumeInfo.industryIdentifiers[0] !== undefined) {
            onlyISBN.push(isbn.volumeInfo.industryIdentifiers[0].identifier);
          }
          if (isbn.volumeInfo.industryIdentifiers[1] !== undefined) {
            onlyISBN.push(isbn.volumeInfo.industryIdentifiers[1].identifier);
          }
        });
        var fullData = response.data.items;
        searchModel.search.searchBooks(onlyISBN).then((response) => {
          var re = response
            .filter((val) => val.length > 0)[0]
            .map((is) => {
              return is.books;
            });
          var foundISBN = response.filter((val) => val.length > 0)[0][0]
            .books[0];
          var userData = response.filter((val) => val.length > 0)[0];
          axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${foundISBN}`)
            .then((resp) => {
              var bookAndUser = {
                bookData: resp.data.items[0],
                userData: userData,
              };
              res.status(200).json(bookAndUser);
            });
        });
      })
      .catch((error) => console.log(error));
  },
};

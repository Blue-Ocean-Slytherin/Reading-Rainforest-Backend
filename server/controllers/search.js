const { json } = require("express");
var searchModel = require("../models");
const axios = require("axios").default;

module.exports = {
  initBooks: (req, res) => {
    searchModel.search.getInitialBooks().then((response) => {
      res.status(200).json(response);
    });
  },
  searchBooks: (req, res) => {
    searchModel.search.searchBooks(req.params).then((response) => {
      if (response.length > 0) {
        var userData = response;
        var book = response[0].books.find((val) => {
          return val.bookName === req.params.searchInput;
        });
        var isbn = book.isbn;
        axios
          .get(`https://www.googleapis.com/books/v1/volumes?q=${isbn}`)
          .then((result) => {
            var bookData = result.data.items.find((element) => {
              return (
                element.volumeInfo.industryIdentifiers[0].identifier === isbn
              );
            });

            var obj = {
              bookData,
              userData,
            };
            res.status(200).json(obj);
          });
      }
    });
  },
};

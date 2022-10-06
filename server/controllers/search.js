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
    console.log("req.params:", req.params);
    console.log("google api: ", process.env.REACT_APP_GOOGLE_BOOKS_API);
    searchModel.search.searchBooks(req.params).then((response) => {
      console.log("response:", response[0]);
      if (response.length > 0) {
        var userData = response;
        var isbn = response[0].books[0].isbn;
        axios
          .get(
            `https://www.googleapis.com/books/v1/volumes?q=${response[0].books[0].isbn}`
          )
          .then((result) => {
            console.log("result:", result.data);
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

  // searchBooks: (req, res) => {
  //   console.log("req.params:", req.params);
  //   console.log("google api: ", process.env.REACT_APP_GOOGLE_BOOKS_API);
  //   axios
  //     .get(`https://www.googleapis.com/books/v1/volumes?q=${req.params}`)
  //     .then((response) => {
  //       var onlyISBN = [];
  //       console.log(
  //         "response.data:",
  //         response.data.items.volumeInfo || "no volumeInfo"
  //       );
  //       console.log(
  //         "isbn:",
  //         response.data.items.volumeInfo?.industryIdentifiers || "not found"
  //       );
  //       response.data.items.forEach((isbn) => {
  //         if (isbn.volumeInfo.industryIdentifiers[0] !== undefined) {
  //           onlyISBN.push(isbn.volumeInfo.industryIdentifiers[0].identifier);
  //         }
  //         if (isbn.volumeInfo.industryIdentifiers[1] !== undefined) {
  //           onlyISBN.push(isbn.volumeInfo.industryIdentifiers[1].identifier);
  //         }
  //       });
  //       console.log("only isbn: ", onlyISBN);
  //       var fullData = response.data.items;
  //       searchModel.search.searchBooks(onlyISBN).then((response) => {
  //         var re = response
  //           .filter((val) => val.length > 0)[0]
  //           .map((is) => {
  //             return is.books;
  //           });
  //         var foundISBN = response.filter((val) => val.length > 0)[0][0]
  //           .books[0];
  //         console.log("Found ISBN:", foundISBN);
  //         var userData = response.filter((val) => val.length > 0)[0];
  //         axios
  //           .get(`https://www.googleapis.com/books/v1/volumes?q=${foundISBN}`)
  //           .then((resp) => {
  //             var bookAndUser = {
  //               bookData: resp.data.items[0],
  //               userData: userData,
  //             };
  //             res.status(200).json(bookAndUser);
  //           });
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // },
};

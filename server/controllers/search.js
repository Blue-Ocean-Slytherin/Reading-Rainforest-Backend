const { json } = require("express");
var searchModel = require("../models");
const axios = require("axios").default;

module.exports = {
  initBooks: (req, res) => {
    searchModel.search.getInitialBooks().then((response) => {
      res.status(200).json(response);
    });
  },
  searchBooks: async (req, res) => {
    let response = await searchModel.search.searchBooks(req.params);
    if (response.length > 0) {
      let userData = response;
      let isbnList = [];
      response.forEach((user) => {
        var book = user.books.find((val) => {
          return val.bookName.match(req.params.searchInput)?.length;
        });
        isbnList.push(book.isbn);
      })
      let googleBooksRes = await Promise.all(isbnList.map( async (isbn)=>{
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${isbn}`);
      }));
      googleBooksRes = googleBooksRes.map((result)=>(result.data));
      let filteredBooksData = [];
      googleBooksRes.forEach((singleRes)=>{
        let temp = singleRes.items.find((element)=>{
          return (
            isbnList.indexOf(element.volumeInfo.industryIdentifiers[0].identifier) > -1 || isbnList.indexOf(element.volumeInfo.industryIdentifiers[1].identifier) > -1
          );
        });
        filteredBooksData.push(temp);
      })
      var obj = {
        bookData: filteredBooksData,
        userData,
      };
      res.status(200).json(obj);
    } else {
      res.sendStatus(500);
    }
  },
};

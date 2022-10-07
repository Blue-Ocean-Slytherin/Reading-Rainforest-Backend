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
          return val.bookName.toLowerCase().match(req.params.searchInput.toLowerCase())?.length;
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
            element.volumeInfo.industryIdentifiers.reduce((found, ISBNrow)=> {
              return ((isbnList.indexOf(ISBNrow.identifier) > -1) + found)
            }, 0)
          );
        });
        filteredBooksData.push(temp);
      })

      let i = filteredBooksData.length-1;
      while (i > -1) {

        if (!filteredBooksData[i]){
          filteredBooksData.splice(i,1);
          userData.splice(i,1);
        }
        i--;
      }

      var obj = {
        bookData: filteredBooksData,
        userData,
      };
      res.status(200).json(obj);
    } else {
      res.status(200).json({});
    }
  },
};

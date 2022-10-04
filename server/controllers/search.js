var searchModel = require("../models");

module.exports = {
  initBooks: (req, res) => {
    searchModel.search.getInitialBooks().then((response) => {
      res.status(200).json(response);
    });
  },
};

var userModel = require("../models/user");

module.exports = {
  getUsers: async ( req, res ) => {
    try {
      let results = await userModel.getUsers();
      // console.log(results);
      res.send(results);
    } catch (err) {
      console.log('There was an error in user/controllers.getUserSub', err);
      res.sendStatus(500);
    }
  },

  getUserInfo: async ( req, res ) => {
    try {
      let results = await userModel.getUserInfo(req.params.uid);
      res.send(results[0]);
    } catch (err) {
      console.log('There was an error in user/controllers.getUserBooks', err);
      res.sendStatus(500);
    }
  },
};

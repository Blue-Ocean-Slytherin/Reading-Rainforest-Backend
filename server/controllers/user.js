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

  makeNewUser: async ( req, res ) => {
    try {
      const { uid, fullName, email, phoneNumber, profilePhoto, lat, long } = req.body;
      let check = await userModel.getUserInfo(uid);
      if (!check[0]) {
        let newUser = await userModel.makeNewUser(uid, fullName, email, phoneNumber, profilePhoto, lat, long);
        res.send(newUser);
      } else {
        res.sendStatus(400);
      }
    } catch (err) {
      console.log('There was an error in user/controllers.makeNewUser', err);
      res.sendStatus(500);
    }
  },

  addNewBook: async ( req, res ) => {
    try {
      const { uid, ISBN } = req.params;
      let results = await userModel.addNewBook(uid, ISBN);
      res.send(results);
    } catch (err) {
      console.log('There was an error in user/controllers.addNewBook', err);
      res.sendStatus(500);
    }
  },

  deleteUser: async ( req, res ) => {
    try {
      let results = await userModel.deleteUser(req.params.uid);
      res.send(results[0]);
    } catch (err) {
      console.log('There was an error in user/controllers.deleteUser', err);
      res.sendStatus(500);
    }
  },
};

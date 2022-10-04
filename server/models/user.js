const User = require("../db/schema");

module.exports = {
  getUsers: async () => {
    try {
      let results = await User.find({}).limit(10);
      return results;
    } catch (err) {
      console.log('There was an error @ user/models.getUsers', err);
      return null;
    }
  },

  getUserInfo: async ( uid ) => {
    try {
      let queryObj = {uid};
      let results = await User.find(queryObj);
      return results;
    } catch (err) {
      console.log('There was an error @ user/models.getUserInfo', err);
      return null;
    }
  },
};

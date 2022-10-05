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

  makeNewUser: async ( uid, fullName, email, phoneNumber, profilePhoto, lat, long ) => {
    try {
      let results = await User.create({
        uid,
        fullName,
        email,
        phoneNumber,
        profilePhoto,
        lat,
        long,
        books: [],
        saved: [],
        ratingTotal: 0,
        ratingsCount: 0,
        trades: [],
        chats: [],
      });
      return results;
    } catch (err) {
      console.log('There was an error @ user/models.makeNewUser', err);
      return null;
    }
  },

  addNewBook: async ( uid, ISBN ) => {
    try {
      let results = await User.findOneAndUpdate(
        {uid},
        {$push: { books: [ISBN] } },
        {new:true}
      );
      return results;
    } catch (err) {
      console.log('There was an error @ user/models.addNewBook', err);
      return null;
    }
  },

  deleteUser: async ( uid )=> {
    try {
      let results = await User.deleteOne({uid});
      return results;
    } catch (err) {
      console.log('There was an error @ user/models.deleteUser', err);
      return null;
    }
  }
};

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
      let results = await User.find({uid});
      return results;
    } catch (err) {
      console.log('There was an error @ user/models.getUserInfo', err);
      return null;
    }
  },

  makeNewUser: async ( uid, name, email, phoneNumber, profilePhoto, lat, long ) => {
    try {
      let results = await User.create({
        uid,
        name,
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

  addNewBook: async ( uid, ISBN, bookName ) => {
    try {
      let results = await User.findOneAndUpdate(
        {uid},
        {$push: { books: [{isbn: ISBN, bookName: bookName}] } },
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
  },

  deleteBook: async ( uid, ISBN ) => {
    try {
      let userInfo = await getUserInfo(uid);
      console.log(userInfo);
      return;
    } catch (err) {
      console.log('There was an error @ user/models.deleteBook', err);
      return null;
    }
  },
};

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

  patchAboutMe: async ( uid, aboutMe ) => {
    try {
      let results = await User.findOneAndUpdate(
        {uid},
        {aboutMe},
        {new:true}
      );
      return results;
    } catch (err) {
      console.log('There was an error @ user/models.patchAboutMe', err);
      res.sendStatus(500);
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
      let userInfo = await User.find({uid});
      let bookList = userInfo[0]['books'];
      for ( let i = 0; i < bookList.length; i++ ) {
        if ( bookList[i]['isbn'] === ISBN ) {
          bookList.splice(i,1);
          break;
        }
      }
      let updatedUserInfo = await User.findOneAndUpdate(
        {uid},
        {books: bookList },
        {new:true}
      );
      return updatedUserInfo;
    } catch (err) {
      console.log('There was an error @ user/models.deleteBook', err);
      return null;
    }
  },
};

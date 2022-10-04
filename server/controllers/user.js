var userModel = require("../models");

module.exports = {
  getUsers: (req, res) => {
    console.log("in getusersub");
    userModel.user.getUsers().then((response) => {
      console.log(response);
      res.status(200).json(response);
    });
  },
};

// const getUserSub = async ( req, res ) => {
//   try {
//     let results = await Models.getUserSub();
//     console.log(results);
//     res.send(results);
//   } catch (err) {
//     console.log('There was an error in controllers.getUserSub', err);
//     res.sendStatus(500);
//   }
// };

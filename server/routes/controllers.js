const Models = require('./models.js');

const getUsers = async ( req, res ) => {
  try {
    let results = await Models.getUsers();
    // console.log(results);
    res.send(results);
  } catch (err) {
    console.log('There was an error in controllers.getUserSub', err);
    res.sendStatus(500);
  }
};

const getUserInfo = async ( req, res ) => {
  try {
    let results = await Models.getUserInfo(req.params.uid);
    // console.log(results);
    res.sendStatus(418);
  } catch (err) {
    console.log('There was an error in controllers.getUserBooks', err);
    res.sendStatus(500);
  }
};

module.exports.getUsers = getUsers;
module.exports.getUserInfo = getUserInfo;
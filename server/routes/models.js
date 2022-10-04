const db = require("../db/schema.js");

const getUsers = async () => {
  try {
    let results = await db.find({}).limit(10);
    return results;
  } catch (err) {
    console.log('There was an error in models.getUsers', err);
    return null;
  }
};

const getUserInfo = async ( uid ) => {
  try {
    let queryObj = {uid};
    let results = await db.find(queryObj);
    console.log(results);
    console.log(queryObj);
    console.log(uid);
    return results;
  } catch (err) {
    console.log('There was an error in models.getUserBooks', err);
    return null;
  }
};

module.exports.getUsers = getUsers;
module.exports.getUserInfo = getUserInfo;
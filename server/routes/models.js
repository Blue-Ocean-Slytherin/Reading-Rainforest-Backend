const db = require("../db/schema.js");

const getUserSub = async () => {
  try {
    let results = await db.find({}).limit(10);
    return results;
  } catch (err) {
    console.log('There was an error in models.getUserSub', err);
    return null;
  }
};

module.exports.getUserSub = getUserSub;
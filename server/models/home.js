const db = require("../db/schema");

module.exports = {
  getTopRatedUsers: async () => {
    try {
      // console.log('CONTROLLER AND MODEL WORKS')
      // let response = await db.find().exec().sort().limit(10)
      let response = await db.find().limit(18).sort({"averageRating": -1})
      console.log('MODELO', response)
      return response;
    } catch(err) {
      console.log('CONTROLLER HOME RATED USER ERR', err)
      res.sendStatus(500)
    }
  }
}
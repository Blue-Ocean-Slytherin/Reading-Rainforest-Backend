const m = require("../models/home")

module.exports = {
  getUsers: async (req, res) => {
    try {
      let results = await m.getTopRatedUsers();
      res.send(results).status(200)
    } catch(err) {
      console.log('CONTROLLER HOME RATED USER ERR', err)
      res.sendStatus(500)
    }

  }
}
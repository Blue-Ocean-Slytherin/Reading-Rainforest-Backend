const express = require("express");
const db = require("./db/schema");
const app = express();
const morgan = require("morgan");
const Router = require("express");
const controllers = require('./routes/controllers.js');
// const qRouter = require("./routes/questions.js");
// const aRouter = require("./routes/answers.js");

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(express.json());

app.get("/initSearchBooks", (req, res) => {
  db.getData()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(400).send("GET from server hit an error");
    });
});

app.get('/user/subs', controllers.getUserSub); // temp, just to see what's in DB

app.get('/user/:userSub/books', controllers.getUserBooks);

app.listen(3001, () => {
  console.log(`Listening at http://localhost:3001`);
});

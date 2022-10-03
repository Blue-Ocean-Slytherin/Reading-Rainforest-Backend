const express = require("express");
const db = require("./db/schema");
const app = express();
const morgan = require("morgan");
const Router = require("express");
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

app.listen(3001, () => {
  console.log(`Listening at http://localhost:3001`);
});

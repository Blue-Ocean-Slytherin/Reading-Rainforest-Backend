<<<<<<< HEAD
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://slytherin:house123456@cluster0.jx9wj4g.mongodb.net/?retryWrites=true&w=majority"; // Enter username and passwords
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
=======
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
>>>>>>> 8903e2c6719e94459cae2008b20c9246f0587614
});

app.listen(3001, () => {
  console.log(`Listening at http://localhost:3001`);
});

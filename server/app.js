const express = require("express");
const db = require("./db/schema");
const app = express();
const cors = require('cors');
const morgan = require("morgan");
const Router = require("express");
const axios = require("axios").default;
const searchRouter = require("./routes/search.js");
const userRouter = require("./routes/user.js");

app.use(cors());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(express.json());
app.use(cors());


app.use("/search", searchRouter);
app.use("/user/", userRouter);

app.listen(3002, () => {
  console.log(`Listening at http://localhost:3002`);
});

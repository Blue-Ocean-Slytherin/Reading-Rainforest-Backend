const express = require("express");
const db = require("./db/schema");
const app = express();
const morgan = require("morgan");
const Router = require("express");
const axios = require("axios").default;
const searchRouter = require("./routes/search.js");
const userRouter = require("./routes/user.js");
const tradeRouter = require("./routes/trade.js")
const cors = require('cors');
const homeRouter = require("./routes/home.js")

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(express.json());
app.use(cors());


app.use("/search", searchRouter);
app.use("/user/", userRouter);
app.use("/trade", tradeRouter);
app.use("/home", homeRouter);

app.listen(3002, () => {
  console.log(`Listening at http://localhost:3002`);
});

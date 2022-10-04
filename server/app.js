const express = require("express");
const db = require("./db/schema");
var cors = require("cors");
const app = express();
const morgan = require("morgan");
const Router = require("express");
const axios = require("axios").default;
const controllers = require("./routes/controllers.js");
const searchRouter = require("./routes/search.js");
const userRouter = require("./routes/user.js");

app.use(cors());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(express.json());

app.use("/search", searchRouter);
app.use("/user/", userRouter);

// app.get("/user/subs", controllers.getUserSub); // temp, just to see what's in DB

// app.get("/user/:userSub/books", controllers.getUserBooks);

app.listen(3002, () => {
  console.log(`Listening at http://localhost:3002`);
});

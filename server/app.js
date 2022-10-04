const express = require("express");
const db = require("./db/schema");
const app = express();
const morgan = require("morgan");
const Router = require("express");
const axios = require("axios").default;
const controllers = require("./routes/controllers.js");
const searchRouter = require("./routes/search.js");
const userRouter = require("./routes/user.js");

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(express.json());

app.use("/search", searchRouter);
app.use("/user/", userRouter);
// app.get("/initSearchBooks", (req, res) => {
//   db.getData()
//     .then((result) => {
//       res.status(200).send(result);
//     })
//     .catch((error) => {
//       res.status(400).send("GET from server hit an error");
//     });
// });

// app.get("/books/:searchInput", (req, res) => {
//   axios
//     .get(`https://www.googleapis.com/books/v1/volumes?q=${req.params}`)
//     .then((response) => {
//       var onlyISBN = [];
//       response.data.items.forEach((isbn) => {
//         if (isbn.volumeInfo.industryIdentifiers[0] !== undefined) {
//           onlyISBN.push(isbn.volumeInfo.industryIdentifiers[0].identifier);
//         }
//         if (isbn.volumeInfo.industryIdentifiers[1] !== undefined) {
//           onlyISBN.push(isbn.volumeInfo.industryIdentifiers[1].identifier);
//         }
//       });
//       console.log("bookISBN:", onlyISBN);
//       res.status(200).json(onlyISBN);
//       // TODO: Make axios request to DB, send onlyISBN as params
//       // TODO: Make new route that takes in onlyISBN and responds with array of book data that exist from DB
//     })
//     .catch((error) => console.log(error));
// });
// app.get("/user/subs", controllers.getUserSub); // temp, just to see what's in DB

// app.get("/user/:userSub/books", controllers.getUserBooks);

app.listen(3001, () => {
  console.log(`Listening at http://localhost:3001`);
});

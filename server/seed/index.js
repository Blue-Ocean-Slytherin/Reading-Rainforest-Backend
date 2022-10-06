const mongoose = require("mongoose");
const uuid = require("uuid");
const books = require("./books");
const emails = require("./email");
const locations = require("./location");
const names = require("./name");
const phoneNumbers = require("./phoneNumber");
const Users = require("../db/schema");

mongoose.connect(
  `mongodb+srv://${process.env.REACT_APP_MONGODB_USERNAME}:${process.env.REACT_APP_MONGODB_PASSWORD}@cluster0.jx9wj4g.mongodb.net/Books?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connection");
});

const seedDB = async () => {
  for (var x = 2; x < 1000; x++) {
    const user = new Users({
      name: names[x],
      email: emails[x],
      profilePhoto:
        "https://st4.depositphotos.com/1012074/20946/v/450/depositphotos_209469984-stock-illustration-flat-isolated-vector-illustration-icon.jpg",
      phoneNumber: phoneNumbers[x],
      lat: locations[x].newLatitude,
      long: locations[x].newLongitude,
      books: [
        {
          bookName: books[x].title,
          isbn: books[x].isbn,
        },
      ],
      saved: [],
      ratingTotal: Math.floor(Math.random() * 6),
      ratingsCount: 1,
      averageRating: Math.floor(Math.random() * 6),
      uid: uuid.v4(),
    });
    await user.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});

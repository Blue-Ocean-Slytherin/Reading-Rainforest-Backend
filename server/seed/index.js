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
      ratingTotal: 0,
      ratingsCount: 0,
      books: [books[x].isbn],
      uid: uuid.v4(),
      saved: [],
    });
    await user.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});

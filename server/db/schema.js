const mongoose = require("mongoose");
const User = require("../db/index");
const books = require("./books");
const emails = require("./email");
const phoneNumbers = require("./phoneNumber");
const names = require("./name");
const locations = require("./location");

mongoose.connect("mongodb://localhost:27017/Books", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connection");
});

const seedDB = async () => {
  for (var x = 0; x < 1000; x++) {
    const book = new User({
      name: names[x],
      email: emails[x],
      phoneNumber: phoneNumbers[x],
      lat: locations[x].newLatitude,
      long: locations[x].newLongitude,
      books: [
        {
          rating: 0,
          title: books[x].title || `Sample Title ${x}`,
          isbn: books[x].isbn || `${x}1935182722`.substring(0, 10),
          pageCount: books[x].pageCount || x,
          publishedDate: Date.now() + Math.random(),
          thumbnailUrl:
            books[x].thumbnailUrl ||
            "https://bonacia-sites.s3.eu-west-1.amazonaws.com/uploads/bpuk/2022/05/30/image-0-1653918564.webp",
          shortDescription:
            books[x].shortDescription ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut...",
          longDescription:
            books[x].longDescription ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          condition: "Used",
          authors: [...books[x].authors] || "David Garcia",
          categories: [...books[x].categories] || "Crime",
        },
      ],
    });
    await book.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});

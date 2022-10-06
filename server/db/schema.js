require("dotenv").config();
const mongoose = require("mongoose");
const u = process.env.REACT_APP_MONGODB_USERNAME;
const p = process.env.REACT_APP_MONGODB_PASSWORD;
const uri = `mongodb+srv://${u}:${p}@cluster0.jx9wj4g.mongodb.net/Books?retryWrites=true&w=majority`; // Enter username and passwords

mongoose.connect(uri);

let userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  profilePhoto: { type: String },
  phoneNumber: { type: String },
  lat: { type: String },
  long: { type: String },
  books: [
    {
      bookName: { type: String },
      isbn: { type: String },
    },
  ],
  saved: [{ type: String }],
  ratingTotal: { type: Number },
  ratingsCount: { type: Number },
  averageRating: { type: Number },
  uid: { type: String },
  trades: [
    {
      transactionID: { type: String },
      ratingNumber: { type: Number },
      tradedToUser: { type: String }, // uid of other user
      status: { type: String }, // accepted, decline, pending, completed(?)
      isbnUser: { type: String },
      isbnTrader: { type: String },
      dateTime: { type: Date },
    },
  ],
  chats: [
    {
      conversationID: { type: Number },
      dateTime: { type: Date },
      members: [{ type: Number }],
      messages: [
        {
          sender: { type: Number },
          message: { type: String },
          timeStamp: { type: Date },
        },
      ],
    },
  ],
  aboutMe: { type: String }
});

let User = mongoose.model("users", userSchema);

let getData = () => {
  return User.find({}).limit(10);
};

let getISBNs = () => {
  return User.find();
};

module.exports = User;

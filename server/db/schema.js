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
<<<<<<< HEAD
  books: [{ { type: String }}],
=======
  books: [
    {
      bookName: { type: String },
      isbn: { type: String },
    },
  ],
>>>>>>> af24b7ace8f14a0fb722d823c5a471fd47597f3f
  saved: [{ type: String }],
  ratingTotal: { type: Number },
  ratingsCount: { type: Number },
  averageRating: { type: Number }, // random number from 0 to 5
  uid: { type: String },
  trades: [
    {
      transactionID: mongoose.ObjectId,
      ratingNumber: { type: String },
      tradedToUser: { type: String },
      status: { type: String },
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
});

let User = mongoose.model("users", userSchema);

let getData = () => {
  return User.find({}).limit(10);
};

let getISBNs = () => {
  return User.find();
};

module.exports = User;

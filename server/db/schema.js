const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  profilePhoto: { type: String },
  phoneNumber: { type: String },
  lat: { type: String },
  long: { type: String },
  books: [{ type: String }],
  ratingTotal: { type: Number },
  ratingsCount: { type: Number },
  sub: { type: String },
  trades: [
    {
      transactionID: mongoose.ObjectId,
      ratingNumber: { type: String },
      tradedToUser: { type: Number },
      status: { type: String },
      isbn: { type: String },
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

module.exports = mongoose.model("Users", userSchema);

// subs

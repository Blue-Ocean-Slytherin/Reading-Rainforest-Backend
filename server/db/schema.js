const mongoose = require("mongoose");

let booksSchema = mongoose.Schema({
  ratings: { type: Number },
  title: { type: String },
  isbn: { type: String },
  pageCount: { type: Number },
  publishedDate: { type: String },
  thumbnailUrl: { type: String },
  shortDescription: { type: String },
  longDescription: { type: String },
  condition: { type: String },
  authors: [{ type: String }],
  categories: [{ type: String }],
});

let userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  lat: { type: String },
  long: { type: String },
  books: [booksSchema],
});

module.exports = mongoose.model("Users", userSchema);

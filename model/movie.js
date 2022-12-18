const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    id: {
      type: String,
      default: uuidv4,
      // default: uuidv7(), // Error coming here because the deault I set here will stay teh same after the first time
      // https://stackoverflow.com/questions/51025857/node-js-can-not-set-default-uuid-with-mongoose
    },
    isFavourite: {
      type: Boolean,
      default: false,
      required: true,
    },
    Title: {
      type: String,
      unique: true,
      required: true,
    },
    Year: {
      type: Number,
      //   required: true,
    },
    Rated: {
      type: String,
      //   required: true,
    },
    Released: {
      type: String,
      //   required: true,
    },
    Runtime: {
      type: String,
      //   required: true,
    },
    Genre: {
      type: String,
      //   required: true,
    },
    Director: {
      type: String,
      //   required: true,
    },
    Writer: {
      type: String,
      //   required: true,
    },
    Actors: {
      type: String,
      //   required: true,
    },
    Plot: {
      type: String,
      //   required: true,
    },
    Language: {
      type: String,
      //   required: true,
    },
    Country: {
      type: String,
      //   required: true,
    },
    Awards: {
      type: String,
      //   required: true,
    },
    Poster: {
      type: String,
      //   required: true,
    },
    Ratings: {
      type: Array,
      //   required: true,
    },
    Metascore: {
      type: String,
      //   required: true,
    },
    imdbRating: {
      type: String,
      //   required: true,
    },
    imdbVotes: {
      type: String,
      //   required: true,
    },
    imdbID: {
      type: String,
      //   required: true,
    },
    Type: {
      type: String,
      //   required: true,
    },
    DVD: {
      type: String,
      //   required: true,
    },
    BoxOffice: {
      type: String,
      //   required: true,
    },
    Production: {
      type: String,
      //   required: true,
    },
    Website: {
      type: String,
      //   required: true,
    },
    Response: {
      type: String,
      //   required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);

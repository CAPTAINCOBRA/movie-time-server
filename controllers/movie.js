const Movie = require("../model/movie");

exports.getMovieById = (req, res, next, id) => {
  Movie.findOne({ id: id }).exec((err, movie) => {
    if (err) {
      return res.status(400).json({
        error: "Movie not found in DB",
      });
    }
    req.movie = movie;

    next(); // This is a weird quirk here. If I keep next() outside this bracket, I'll get error. Check this out later. TODO:
  });
};

exports.createMovie = (req, res) => {
  const movie = new Movie(req.body);

  Movie.findOne({ id: req.body.id }).exec((err, found) => {
    if (found) {
      return res.status(400).json({
        error: "Movie already exists in DB",
        foundMovie: found,
      });
    } else {
      movie.save((err, movie) => {
        if (err) {
          return res.status(400).json({
            error: "Movie not saved in DB",
            err: err,
          });
        }
        res.status(200).json({
          message: "Movie saved in DB",
          movie,
        });
      });
    }
  });
};

exports.getMovie = (req, res) => {
  if (req.movie) {
    return res.status(200).json({
      movie: req.movie,
    });
  } else {
    return res.status(400).json({
      error: "Movie not found in DB",
    });
  }
};

exports.getAllMovies = (req, res) => {
  Movie.find().exec((err, movies) => {
    if (err) {
      return res.status(400).json({
        error: "No movies found in DB",
      });
    } else {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.set("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Origin", "*");
      return res.status(200).json({
        movies,
      });
    }
  });
};

exports.deleteMovie = (req, res) => {
  const movie = req.movie;

  movie.remove((err, deletedMovie) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete the movie",
      });
    }
    res.json({
      message: "Deletion was a success",
      deletedMovie,
    });
  });
};

exports.updateMovie = (req, res) => {
  const movie = req.movie;

  Movie.findOne({ id: req.body.id }).exec((err, found) => {
    if (err) {
      return res.status(400).json({
        error: "Movie not found in DB",
      });
    } else if (found) {
      movie.isFavourite = req.body.isFavourite;
      movie.save((err, updatedMovie) => {
        if (err) {
          return res.status(400).json({
            error: "Failed to update movie",
          });
        }
        res.json(updatedMovie);
      });
    } else {
      return res.status(400).json({
        error: "Movie not found in DB",
      });
    }
  });
};

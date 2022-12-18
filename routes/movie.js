const express = require("express");
const {
  getMovieById,
  createMovie,
  getMovie,
  getAllMovies,
  deleteMovie,
  updateMovie,
} = require("../controllers/movie");

// const logger = (req, res, next) => {
//   console.log(`${req.method} request for ${req.url} with body: ${req.body}`);
//   console.log(`${JSON.stringify(req.body)}`);
//   next();
// };

const router = express.Router();

router.param("movieId", getMovieById);

router.post("/movie/create", createMovie);

router.get("/movie/:movieId", getMovie);
router.get("/movies", getAllMovies);
// router.put("/favourite/:movieId", logger, updateMovie);
router.put("/favourite/:movieId", updateMovie);

router.delete("movie/:movieId", deleteMovie);

module.exports = router;

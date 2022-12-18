const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

const movieRoutes = require("./routes/movie");

const express = require("express");
const app = express();

mongoose.connect(
  process.env.DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.use(bodyParser.json());
app.use(cors());
// middleware that logs the request
app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url} with body: ${req.body}`);
  next();
});

app.use("/api", movieRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});

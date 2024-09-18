const axios = require("axios");
const express = require("express");
const morgan = require("morgan");

require("dotenv").config();

const app = express();
const API_KEY = process.env.API_KEY;

app.use(morgan("dev"));

app.get("/", async (req, res) => {
  try {
    const movie = await axios.get(`http://www.omdbapi.com?apikey=${API_KEY}`, {
      params: req.query,
    });
    res.json(movie.data).status(200);
  } catch (error) {
    throw error;
  }
});

module.exports = app;

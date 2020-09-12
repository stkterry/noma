const express = require('express');
const mongoose = require('mongoose');
const app = express();

const db = require('./server/config/keys').mongoURI;

app.get("/", (req, res) => res.send("Hello World!!!"));

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server is running on port ${port}`));

mongoose
  .connect(db, {useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
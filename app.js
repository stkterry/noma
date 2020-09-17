const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require("passport");
const path = require('path');


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}


// App =========================================================================
const app = express();
const port = process.env.PORT || 5001;
// -----------------------------------------------------------------------------

// Database ====================================================================
const db = require('./server/config/keys').mongoURI;
const users = require('./server/routes/api/users');

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// Config / emits
// app.get("/", (req, res) => res.send("Hello World!!!"));
app.use(passport.initialize());
require('./server/config/passport')(passport)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API Routes
app.use("/api/users", users);

// Listeners
app.listen(port, () => console.log(`Server is running on port ${port}`));

// -----------------------------------------------------------------------------
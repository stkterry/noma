const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// App =========================================================================
const app = express();
const port = process.env.PORT || 5001;
// -----------------------------------------------------------------------------

// Database ====================================================================
const db = require('./server/config/keys').mongoURI;
const users = require('./server/routes/api/users');

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// Config / emits
app.get("/", (req, res) => res.send("Hello World!!!"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API Routes
app.use("/api/users", users);

// Listeners
app.listen(port, () => console.log(`Server is running on port ${port}`));

// -----------------------------------------------------------------------------
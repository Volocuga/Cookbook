const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const db = require("./config/key").mongoURI;
const recipe = require("./routes/recipe");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use("/api/recipe", recipe);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("mongoose connect"))
  .catch(err => console.log(err));

app.listen(port, () => console.log(`Server started on port ${port}`));

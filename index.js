const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const CONNECTION_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://faeshal:toshiba-c855d@loan-e3dqb.mongodb.net/hutang?retryWrites=true&w=majority";
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const hutangRoutes = require("./routes/hutang");

// SECTION : Static
app.use(express.static(path.join(__dirname, "public")));

// SECTION : Template Engine
app.set("view engine", "ejs");

// SECTION : BodyParser
app.use(bodyParser.urlencoded({ extended: false }));

// SECTION : Routing
app.use(hutangRoutes);

// SECTION :Database
mongoose.connect(CONNECTION_URI, {
  useNewUrlParser: true
});

// SECTION : Server
app.listen(PORT, () => {
  console.log("web Server Running on Port :" + PORT);
});

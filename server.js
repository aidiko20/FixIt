const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./database");
const path = require("path");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");
const user = require("./routes/user.js")
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//sessions
app.use(
  session({
  secret: "fraggle-rock",
  store: new MongoStore ({mongooseConnection: dbConnection}),
  resave: false,
  saveUninitialized: false
  })
)

app.use(passport.initialize());
app.use(passport.session());

app.use( (req, res, next) => {
  console.log("req.session", req.session);
  next()
});

app.post("/user", (req, res) => {
  console.log("user signup");
  req.session.username = req.body.username;
  res.end()
})

// Routes
app.use("/user", user)

const api = require("./routes/api.js")
app.use("/api", api);

app.post("/api/company", (req, res) => {
  console.log(req.body)
  console.log("company");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

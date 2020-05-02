//SETTING UP AN EXPRESS
const express = require("express");

const app = express();

//TESTING THE SERVER
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/ping", function (req, res) {
  res.send("pong");
});

app.get("feedback", function (req, res) {
  res.render("feedback", {
    pageTitle: "Coca Cola",
    pageId: "Home",
  });
});

//EXPRESS EXERCISES
//ROUTES
app.get("/", function (req, res) {
  res.send("Hello, World!");
});

app.get("/cats", function (req, res) {
  res.send("Meow");
});

app.get("/dogs", function (req, res) {
  res.send("Woof");
});

app.get("/cats_and_dogs", function (req, res) {
  res.send("Living Together");
});

//ROUTE PARAMETERS
app.get("/greet/:name", function (req, res) {
  res.send("Hello " + req.params.name);
});

//QUERY PARAMETERS
app.get("/year", function (req, res) {
  var currentYear = 2020;
  var year = currentYear - age;
  var age = req.query.age;
  res.send("You were born in " + age + "!");
});

//EJS EXERCISE 2
app.use(express.static("public"));

var router = express.Router();
router.get("/cats", function (req, res) {
  res.render("cats", {
    pageTitle: "Cats",
    pageID: "Home",
  });
});

app.listen("3000", function () {
  console.log("Hello");
});

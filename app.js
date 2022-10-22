const express = require("express");
const app = express();
const { Todo } = require("./models");
const path = require("path");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.get("/", async (req, res) => {
  const allTodos = await Todo.getTodos();
  if (req.accepts("html")) {
    res.render("index", {
      allTodos,
    });
  } else {
    res.json(allTodos);
  }
});



module.exports = app;

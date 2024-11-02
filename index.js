const express = require("express");
const path = require("path");
const app = express();

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Set the view engine to ejs
app.set("view engine", "ejs");

// Route to render the index.ejs file
app.get("/imgIn", (req, res) => {
  res.render("imgIn/index");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

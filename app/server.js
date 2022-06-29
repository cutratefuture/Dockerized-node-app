const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = "5400";
const router = express.Router();
router.get("/", (req, res) => {
  res.render("index", { title: "Home" });
  module.exports = router;
});

app.set("port", port);
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Dev server started...`);
  console.log(`http://localhost:${port}`);
});

// express setup
app.set("view engine", "ejs"); // use ejs-template language
app.use(expressLayouts); //use layout.ejs instead of single page index format
app.set("views", path.join(__dirname, "views")); //require path
app.use(express.static(path.join(__dirname, "public"))); //set dir to serve from

// Routes
app.use("/", router);
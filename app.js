const express = require("express");
const browserSync = require("browser-sync");
const path = require("path");

const app = express();
const port = 1337;
const listening = () => {
  browserSync({
    proxy: `localhost:${port}`,
    port: port + 1,
    files: ["app.js", "views/**/*", "src/**/*"],
    open: false,
    ui: false,
  });
};

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, listening);

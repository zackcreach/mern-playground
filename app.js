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
    ui: false,
    open: false,
    online: false,
  });
};

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.locals.react = "global react local property";
  next();
});

app.get("/", (req, res) => {
  res.render("index", {
    navigation: ["home&amp;", "&amp;about", "portfolio&amp;"],
  });
});

app.listen(port, listening);

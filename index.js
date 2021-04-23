const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = "3001";

app.use(bodyParser.urlencoded({ extended: false }));
app.post("/index", (req, res) => {
  if (!req.body.name || !req.body.phone) {
    return res.sendStatus(400);
  }
  console.log(req.body);
});
app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () =>
  console.log(`server 1 listening at: http://localhost:${PORT}/index`)
);

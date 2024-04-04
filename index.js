const express = require("express");
const app = express();
const port = 8001;

app.get("/", (req, res) => {
  res.send("express server");
});

app.listen(port, () => {
  console.log("server running on " + port);
});

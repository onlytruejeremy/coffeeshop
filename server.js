const express = require("express");

const app = express();

const port = 5000 || process.env.port;

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(port, () => {
  console.log("Running Server");
});

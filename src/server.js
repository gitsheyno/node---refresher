const express = require("express");

const app = express();

/**
 * Our API
 */
app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({
    message: "Hello",
    abbas: [
      { a: 1, b: 2 },
      { a: 1, b: 2 },
      { a: 1, b: 2 },
      { a: 1, b: 2 },
    ],
    obj: { age: 12, job: "no" },
  });
});

module.exports = app;

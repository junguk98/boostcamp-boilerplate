const express = require("express");
const port = process.env.PORT || 8080;

const app = express();

app.get("/api/sample", (req, res) => {
  res.send(`<h1>sample responsed</h1>`);
});

app.listen(port, () => {
  console.log(`server is running... ${port}`);
});

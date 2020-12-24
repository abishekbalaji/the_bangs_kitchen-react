const path = require("path");

const express = require("express");

const app = express();
const publicPath = path.join(__dirname, "..", "public");

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// app.get("/about_page", (req, res) => {
//     res.sendFile()
// })

app.get("/test", (req, res) => {
  res.send({message: "hello"});
});

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// app.post("/login", (req, res) => {
//   console.log(req);
// });

app.listen(port, () => {
  console.log("Server is running at port 3000");
});

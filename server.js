const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "https://localhost:8081",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.json({ message: "Welcome To Express" });
});

require("./routes/tutorial.routes.js")(app);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

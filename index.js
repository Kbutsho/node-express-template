const { cyan, bold } = require("colorette");
const app = require("./app");
require("dotenv").config();
const dbConnection = require("./utils/dbConnection");

dbConnection();
app.get("/api/v1/user", (req, res) => {
  res.status(200).json({
    status: true,
    message: "Home page",
  });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(cyan(bold("Server is running on PORT " + port + " !")));
});

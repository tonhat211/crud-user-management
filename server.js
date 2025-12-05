const express = require("express");
const app = express();
const port = 8080;

const userRoutes = require("./routes/userRoutes");
app.use(express.json());
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.get("/users", (req, res) => {
  const users = [];
  res.json(users);
});

app.post("/users", (req, res) => {
  const result = {
    message: "User created",
  };
  res.json(result);
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const result = {
    message: "User updated",
  };
  res.json(result);
});

app.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  const result = {
    message: "User updated with patch",
  };
  res.json(result);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const result = {
    message: "User deleted",
  };
  res.json(result);
});

app.listen(port, () => console.log(`> app listening on port ${port}!`));

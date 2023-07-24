const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const users = [];

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      return res.status(409).json({ error: "Username already exists" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    users.push({ username, password: hashedPassword });
    return res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = users.find((user) => user.username === username);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

import express from "express";

const app = express();
app.use(express.json());

// GET
app.get("/get-user", (req, res) => {
  res.send("api sucess");
});

// POST
app.post("/post-user", (req, res) => {
  const user = req.body;
  res.send(`user added successfully: ${user.name}`);
});

// PUT
app.put("/update-user", (req, res) => {
  const user = req.body;
  res.send(`user updated successfully: ${user.name}`);
});

// DELETE
app.delete("/delete-user", (req, res) => {
  const user = req.body;
  res.send(`user deleted successfully: ${user.name}`);
});

// Server
app.listen(8009, () => {
  console.log("server is running at port 8009");
});

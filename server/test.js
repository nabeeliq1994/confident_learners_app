import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is alive");
});

app.listen(5050, () => console.log("Running on 5000"));

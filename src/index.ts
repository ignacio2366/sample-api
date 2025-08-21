import express from "express";
import userRouter from "./routes/user";
const app = express();
const bodyParser = require("body-parser");
const PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Routes
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Sample API is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

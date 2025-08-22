import express from "express";
import userRouter from "./routes/user";
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;

const cors = require("cors");
const swaggerui = require("swagger-ui-express");
const swaggerDocumentation = require("./../swagger-output.json");

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API
app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocumentation));

//Routes
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Sample API is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

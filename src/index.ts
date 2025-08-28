import express from "express";
import userRouter from "./routes/user";
import connectDB from "./configs/mongo";
import dotenv from "dotenv";

const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;

const cors = require("cors");
const swaggerui = require("swagger-ui-express");
const swaggerDocumentation = require("./../swagger-output.json");

dotenv.config();

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

//DB Mongo
connectDB();
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

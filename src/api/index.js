"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./../routes/user"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
const bodyParser = require("body-parser");
const PORT = 3000;
const cors = require("cors");
const swaggerui = require("swagger-ui-express");
const swaggerDocumentation = require("./../swagger-output.json");
dotenv_1.default.config();
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//DB Mongo
// connectDB();
// API
app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocumentation));
//Routes
app.use("/api/user", user_1.default);
app.get("/", (req, res) => {
    res.send("Sample API is running!");
});
if (!process.env.VERCEL) {
    // This runs ONLY locally (when VERCEL is undefined)
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

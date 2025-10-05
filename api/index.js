import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "API Catalog running",
    version: process.env.APP_VERSION || "v1.0.0",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

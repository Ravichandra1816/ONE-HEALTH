import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.config.js";
import connectCloudinary from "./config/cloudinary.config.js";

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middlewares
app.use(express.json());
app.use(cors());

// api endpoints

app.get("/", (req, res) => {
  res.send("API WORKING GOOD");
});

app.listen(port, () => console.log("Server Started", port));

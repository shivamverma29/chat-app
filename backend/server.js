import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log("server running on port " + PORT);
});

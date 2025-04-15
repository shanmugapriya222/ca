import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes.js";

const users = [
    { email:"alice@gmail.com",password:"alice123"},
    {email:"bob@gmail.com",password:"bob123"},
    {email: "charlie@gmail.com",password:"charlie123"}
]

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/users",userRoutes);

app.listen(PORT,() => {
    console.log(`server is running on:http://localhost:${PORT}`);
});
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const authRoutes = require("./routes/auth");
require("dotenv").config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// FIXED LINE
app.use("/api", authRoutes)

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err))

app.get("/", (req,res)=>{
    res.send("RedBus API Running")
})

app.get("/api/test", (req, res) => {
    res.json({ message: "Backend is connected 🚀" });
});

app.listen(5000,()=>{
    console.log("Server running on port 5000")
})
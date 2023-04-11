require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const connection = require("./db/Connection.js")
const userRoutes = require("./Routes/UserRoutes");
const authRoutes = require("./Routes/Auth");
const BmiRoutes = require("./Routes/Bmi")


//MongoDb Connection
connection();

// middlewares
app.use(express.json())
app.use(cors());

// router file linked 
app.use("/api/users", userRoutes)
app.use("/api/users/:id", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/calculate-bmi", BmiRoutes)
app.use("/api/logout", userRoutes)




const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Hello World Bmi ");
})

app.listen(8000, () => {
    console.log(`Server has started on localhost//:${port}`)
})
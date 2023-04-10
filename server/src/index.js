require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const connection = require("./db/Connection.js")
const userRoutes = require("./Routes/UserRoutes");
const authRoutes = require("./Routes/Auth");
const productsRoutes = require("./Routes/ProductsRoutes")


//MongoDb Connection
connection();

// middlewares
app.use(express.json())
app.use(cors());

// router file linked 
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/products", productsRoutes)



const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(5000, () => {
    console.log(`Server has started on localhost//:${port}`)
})
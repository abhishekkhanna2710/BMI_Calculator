const router = require("express").Router();

const Products = require("../models/ProductSchema");


router.post("/", async (req, res) => {

    const productsArray = req.body;
    try {

        if (!Array.isArray(productsArray)) {
            return res.status(400).send({ message: "Products should be an array" });
        }
        for (const product of productsArray) {
            const { image_url, name, price, description, quantity } = product;
            const data = new Products({ image_url, name, price, description, quantity });
            await data.save();
        }

        return res.status(200).send({ message: "Products saved successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal server error" });

    }
})





// Getting all the car data

router.get("/", async (req, res) => {
    try {

        const products = await Products.find();
        return res.status(200).send(products);

    } catch (error) {
        console.log(error)
    }
})

module.exports = router;


const router = require("express").Router();
const Bmi = require("../models/BmiSchema")

// save BMI data to MongoDB
router.post('/', async (req, res) => {
    const { height, weight } = req.body;

    // Calculate BMI
    const heightInMeters = height / 3.281; // Convert height from feet to meters
    const bmi = weight / (heightInMeters ** 2);

    // Save BMI data to MongoDB
    const newBmi = new Bmi({ height, weight, bmi });
    await newBmi.save();

    // Return BMI value
    res.json({ bmi });
});



module.exports = router;

const router = require("express").Router();
const Bmi = require("../models/BmiSchema")

router.post('/', async (req, res) => {
    const { height, weight } = req.body;

    // Calculate BMI
    const heightInMeters = height / 3.281;
    const bmi = weight / (heightInMeters ** 2);


    const newBmi = new Bmi({ height, weight, bmi });
    await newBmi.save();

    // BMI value
    res.json({ bmi });
});



module.exports = router;

const router = require("express").Router();
const Bmi = require("../models/BmiSchema")
const auth = require("./Auth")

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


router.get('/', async (req, res) => {
    try {
        const bmis = await Bmi.find({});
        res.json(bmis);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});



module.exports = router;

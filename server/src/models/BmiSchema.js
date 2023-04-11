const mongoose = require('mongoose');

const bmiSchema = new mongoose.Schema({
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    bmi: { type: Number, required: true }
});

const Bmi = mongoose.model('Bmi', bmiSchema);

module.exports = Bmi;

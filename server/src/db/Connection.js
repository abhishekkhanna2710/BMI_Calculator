const mongoose = require("mongoose");
module.exports = () => {
    const connectionParams = {
        useNewUrlParser: "true",
        useUnifiedTopology: "true"
    }
    try {
        mongoose.connect("mongodb+srv://AbhishekKhanna:bmiCalculatorTask@cluster0.w2la12o.mongodb.net/?retryWrites=true&w=majority", connectionParams)
        console.log("Connected Database");
    } catch (error) {
        console.log(error.message)
        console.log("Not connected");
    }
}
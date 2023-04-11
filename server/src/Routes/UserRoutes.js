const router = require("express").Router();
const bcrypt = require('bcrypt');

const { User, validate } = require("../models/UserSchema");


router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message })
        }
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(409).send({ message: "User with given Email already Exists" })
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT))
        const hashpassword = await bcrypt.hash(req.body.password, salt);

        await new User({ ...req.body, password: hashpassword }).save();
        res.status(201).send({ message: "User Created Successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Internal Server Error" })
    }
})



// GET one users
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        console.log(req.params.id)
        res.status(200).json(user);
        console.log(user)

        if (user.length == 0) {
            return res.status(404).json({ message: 'User not found' });
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});



// Logout user
router.post('/', async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => token.token !== req.token);
        await req.user.save();

        res.send('Logged out successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;

const User = require('./models/user'); // ✅ Matches "User.js"


// Create a new user
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({
            name,
            email,
            password, // In a real app, hash the password before saving
            profilePicture: req.file ? req.file.path : null,
        });

        await newUser.save();
        res.status(201).json({ message: "User created successfully!", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
};

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
};

module.exports = { createUser, getUsers };

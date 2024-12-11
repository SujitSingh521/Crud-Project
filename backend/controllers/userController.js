const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Generate JWT Token
const generateToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '1h'});
};

// Sign up
exports.signup = async (req, res)=>{
    const { name, email, password } =req.body;
    try {
        const user = new User({name, email, password });
        await user.save();
        res.status(201).json({token: generateToken(user._id) });
    } catch (error) {
        res.status(400).json({error: 'Failed to sign up' });
    }
};

// Sign in
exports.signin = async(req, res)=>{
    const { email, password } = req.body;
    try {
        const user = await User.findOne({email});
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        res.status(200).json({token: generateToken(user._id) });
    } catch(error){
        res.status(500).json({error: 'Sign in failed' });
    }
};

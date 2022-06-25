const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

/*  @description     Register User
    @route           POST /api/users
    @access          Public     */
const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // check if all fields are filled
  if (!email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  // check if user already exists
  if (await User.findOne({ email })) {
    res.status(400);
    throw new Error('Email already exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({ user, token: generateToken(user.id) });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

/*  @description     Authenticate a User
    @route           POST /api/users/login
    @access          Public     */
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({ user, token: generateToken(user.id) });
  } else {
    res.status(400);
    throw new Error('Incorrect credentials');
  }
});

/*  @description     get logged in user
    @route           GET /api/users/user
    @access          Public     */
const getLoggedInUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = {
  // getAllUsers,
  registerUser,
  loginUser,
  getLoggedInUser,
};

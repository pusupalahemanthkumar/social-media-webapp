// Importing Required files and packages here
import asyncHandler from "express-async-handler";

import User from "../models/UserModel.js";
import generateToken from "../utils/generateTokens.js";

// Authenciate User
const authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      userName: user.userName,
      email: user.email,
      profileImage: user.profileImage,
      dob: user.dob,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invaild email or password.");
  }
});

// Registration
const registerUser = asyncHandler(async (req, res, next) => {
  console.log("User register !!");
  const { userName, email, profileImage, dob, password } = req.body;
  const userExits = await User.findOne({ email });

  if (userExits) {
    res.status(400);
    throw new Error("User already exists!");
  }

  const user = await User.create({
    userName,
    email,
    profileImage,
    dob,
    password,
  });
  if (user) {
    res.status(200);
    res.json({
      _id: user._id,
      userName: user.userName,
      email: user.email,
      profileImage: user.profileImage,
      dob: user.dob,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export { authUser, registerUser };

import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs'
import generateToken from '../utils/generateToken.js';

const userLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    console.log(req.body);
    const user = await User.findOne({ email });
    if(user && (await bcrypt.compare(password, user.password))){
        generateToken(res, user._id);
        res.status(200).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin
        });
    }else{
        res.status(401);
        throw new Error('Invalid credentials')
    }
});

const userRegister = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if(!firstName || !lastName || !email || !password){
        res.status(400);
        throw new Error('Please fill all fields');
    };

    const userExist = await User.findOne({ email });

    if(userExist){
        res.status(400);
        throw new Error('User already exist');
    };

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword
    });

    if(user){
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    }else{
        res.status(400);
        throw new Error('Invalid user data');
    }
});

const userLogout = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });

    res.status(200).json({message: 'Logged out successfully'})
});

const userProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if(user){
        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    }else{
        res.status(404);
        throw new Error('User not found')
    };
});

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if(user){
       user.firstName = req.body.firstName || user.firstName;
       user.lastName = req.body.lastName || user.lastName;
       user.email = req.body.email || user.email;

       if(req.body.password){
        user.password = req.body.password;
       }

       const updatedUser = await user.save();
       res.status(200).json({
        _id: updatedUser._id,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
       });
    }else{
        res.status(404);
        throw new Error('User not found')
    };
});

const getAllUsers = asyncHandler(async (req, res) => {
    res.send('get  all users admin')
});

const getUserById = asyncHandler(async (req, res) => {
    res.send('get single user by ID - Admin')
})

const deleteUser = asyncHandler(async (req, res) => {
    res.send('delete user - Admin')
});

export { 
    userLogin,
    userLogout,
    userRegister,
    userProfile,
    updateUserProfile,
    getAllUsers,
    getUserById,
    deleteUser
};
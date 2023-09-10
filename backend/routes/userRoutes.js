import express from 'express';
import { 
    userLogin,
    userLogout,
    userRegister,
    userProfile,
    getAllUsers,
    getUserById,
    deleteUser,
    updateUserProfile,
 } from '../controllers/userController.js';
 import { protect, admin } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').post(userRegister).get(protect, admin, getAllUsers);
router.post('/logout', userLogout);
router.post('/login', userLogin);
router.route('/profile').get(protect, userProfile).put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById);

export default router
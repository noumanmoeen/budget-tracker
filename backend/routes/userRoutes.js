import express from 'express'
import { loginUser, registerUser, fetchUser , updateUser } from '../controllers/userControllers.js'
import { protect } from '../middlewares/authMiddleware.js'
export const router = express.Router()
// import {
//   authUser,
//   registerUser,
//   getUserProfile,
//   updateUserProfile,
//   getUsers,
//   deleteUser,
//   getUserById,
//   updateUser,
// } from '../controllers/userController.js'
// import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser)
router.route('/login').post(loginUser)
router.route('/:id').get(protect, fetchUser).post(protect, updateUser)

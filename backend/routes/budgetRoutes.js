import express from 'express'
import { protect } from '../middlewares/authMiddleware.js'
import { createBudget, deleteBudget, getMyBudget, updateBudget } from '../controllers/budgetControllers.js'
export const router = express.Router()


router.route('/').post(protect, createBudget)
// router.route('/login').post(createBudget)
router.route('/:id').get(protect, getMyBudget).post(protect, updateBudget).delete(protect, deleteBudget)
router.route('/self').get(protect, getMyBudget)

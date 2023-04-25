import Budget from "../models/budgetModel.js"
import asyncHandler from 'express-async-handler'
import moment from 'moment'


export const createBudget = asyncHandler(async (req, res) => {


    const { title, monthlyBudget, startDate, active } = req.body

    if (!title || !monthlyBudget || !startDate || !active) {
        res.status(400)
        throw new Error('Please enter all fields')
    }

    const activeBudgets = await checkForActiveBudgets(req.user.id)

    if (activeBudgets.length) {
        activeBudgets.map(async ({ _id }) => {
            await Budget.findOneAndUpdate({ _id }, { active: false })
        })
    }

    const budgetStart = moment(startDate)
    const budget = await Budget.create({
        title, monthlyBudget, startDate, user: req.user.id, endDate: budgetStart.clone().add(1, "months")
    })

    res.json({
        budget
    })


})


export const getMyBudget = asyncHandler(async (req, res) => {


    const budgets = await Budget.find({ user: req.user.id }).select(['-createdAt', '-updatedAt', '-__v'])

    res.json({
        budgets
    })

})

export const updateBudget = asyncHandler(async (req, res) => {


    const { id } = req.params

    const { active } = req.body

    if (!id) {
        res.status(400)
        throw new Error('Please enter id for budget')
    }

    if (active) {
        const activeBudgets = await checkForActiveBudgets(req.user.id)
        if (activeBudgets.length) {
            activeBudgets.map(async ({ _id }) => {
                await Budget.findOneAndUpdate({ _id }, { active: false })
            })
        }
    }

    const budget = await Budget.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
    }).select(['-createdAt', '-updatedAt', '-__v'])

    res.json({
        budget
    })


})

export const deleteBudget = asyncHandler(async (req, res) => {


    const { id } = req.params

    if (!id) {
        res.status(400)
        throw new Error('Please enter id for budget')
    }


    await Budget.deleteOne(id)

    res.json({
        message: "Budget Deleted"
    })


})

export const getBudgetbyId = asyncHandler(async (req, res) => {


    const { id } = req.params

    if (!id) {
        res.status(400)
        throw new Error('Please enter id for budget')
    }


    const budget = await Budget.findById(id)

    res.json({
        budget
    })


})


const checkForActiveBudgets = asyncHandler(async (userId, budgetId) => {

    const budgets = await Budget.find({ user: userId })
    return budgets.filter((item) => item.active && item._id.toString() !== budgetId || '')

})


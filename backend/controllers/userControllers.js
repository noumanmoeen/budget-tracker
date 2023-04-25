import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, phoneNumber } = req.body

    if (!name || !email || !password || !phoneNumber) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if user exists
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        phoneNumber,
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }




})


export const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body


    if (!email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const user = await User.findOne({ email })

    if (!user) {
        res.status(400)
        throw new Error('User does not exists')
    }

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({ _id: user._id, name: user.name, email: user.email, phoneNumber: user.phoneNumber, token: generateToken(user._id) })

    }
    else {
        res.status(400)
        throw new Error('Incorrect Password')
    }


})

export const fetchUser = asyncHandler(async (req, res) => {

    const { _id, email, phoneNumber, name } = await User.findById(req.user.id)
    res.json({
        id: _id,
        email, name, phoneNumber
    })


})

export const updateUser = asyncHandler(async (req, res) => {


    const userData = req.body
    const userId = req.params.id

    if (!userId) {
        res.status(400)
        throw new Error('No user id')
    }

    const user = await User.findById({ id: userId })


    if (!user) {
        res.status(401)
        throw new Error('No user')
    }


    const updatedUser = await User.findByIdAndUpdate(req.user.id, userData, {
        new: true,
    }).select(['-password', '-__v'])

    res.json({
        user: updatedUser
    })


})


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}
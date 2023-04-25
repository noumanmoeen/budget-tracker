import mongoose from 'mongoose'

const expenseSchema = mongoose.Schema(
    {

        title: {
            type: String,
            required: true,
        },
        budget: [
            { type: mongoose.Schema.Types.ObjectId, ref: 'Budget' }
        ],
        amount: {
            type: Number,
            required: true,
            default: 0.0
        },
        paid: {
            type: Boolean,
            required: true,
            default: false
        },
        expenseType: {
            type: String,
            enum: ['M0NTHLY', 'ADDITIONAL'],
            required: true

        }

    }
)


const Expense = mongoose.model('Expense', expenseSchema)

export default Expense
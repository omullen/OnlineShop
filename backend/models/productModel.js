import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
},  {
        timestamps: true
})

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    reviews: [reviewSchema]
},  {
    timestamps: true
})

const Product = mongoose.model('products', productSchema)
export default Product
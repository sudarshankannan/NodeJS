const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        min: 5,
        required: true
    },
    comment: {
        type: String,
        require: true
    },
    author: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [commentSchema] //array of type "commentsSchema"
                            //stores all comments as an array of documents within comment
}, {
    timestamps: true
});

var Dishes = mongoose.model('Dish', dishSchema);
module.exports = Dishes;
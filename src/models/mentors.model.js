
const mongoose = require('mongoose')

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100,
        minlength: 2
    },
    age: {
        type: Number,
        required: true,
        min: 15,
        max: 100
    },
    gender: {
        type: String,
        required: true,
        enum: [
            'male',
            'female',
            'nonbinary'
        ]
    }
})

module.exports = mongoose.model('mentors', mentorSchema)

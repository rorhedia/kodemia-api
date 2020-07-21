
const mongoose = require('mongoose')

const koderSchema = new mongoose.Schema({
    name: {
        type     : String,
        required : true,
        maxlength: 100,
        minlength: 2
    },
    age: {
        type    : Number,
        required: true,
        min     : 15,
        max     : 100
    },
    gender: {
        type    : String,
        required: true,
        enum    : [
            'male',
            'female',
            'nonbinary'
        ]
    },
    email: {
        type   : String,
        require: true
        // match  : /.+@.+\.+/
    },
    password :{
        type   : String,
        require: true,
        min    : 1
    }
})

module.exports = mongoose.model('koders', koderSchema)

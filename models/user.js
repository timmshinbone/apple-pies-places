/////////////////////////////////////
//// Our Schema and dependencies ////
/////////////////////////////////////
const mongoose = require('../utils/connection')

// destructuring the Schema and model from mongoose
const { Schema, model } = mongoose

// try this out in a node repl to understand destructuring
// const someObj = {
//     a: 'something',
//     b: 'something else',
//     donut: 'good'
// }

// const { donut, a, b } = someObj
// console.log(donut)
// console.log(a)
// console.log(b)

///////////////////////////
//// Schema definition ////
///////////////////////////
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

///////////////////////////
//// create user model ////
///////////////////////////
const User = model('User', userSchema)

///////////////////////////
//// export user model ////
///////////////////////////
module.exports = User
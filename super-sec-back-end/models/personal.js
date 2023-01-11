const mongoose =require('mongoose')
const { boolean } = require('webidl-conversions')

const personalSchema = new mongoose.Schema(
    {

        name:{
            type: String,
            required: true
        },
        
        armed:{
            type: Number,
            required: true,
            default: '0'
        },
        phone:{
            type: String,
            required: true
        },
       
        email:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: false
        }



})

module.exports = mongoose.model('Personal', personalSchema)
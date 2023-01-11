const mongoose =require('mongoose')
const { boolean } = require('webidl-conversions')

const personalSchema = new mongoose.Schema(
    {

        personal:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Personal"
        },
        template:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "ShiftTemplates"
        },
        start:{
            type: String,
            required: true
        },
        end:{
            type: String,
            required: true
        },
        active:{
            type: Number,
            required: true,
            default: 0
        },
        notes:[{
            note: String,
            date: Date
           
        }],
        



})

module.exports = mongoose.model('Shift', personalSchema)
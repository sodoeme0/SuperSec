const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')

const shiftTemplateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        directions: {
            type: String,
            required: true
        },
        armed: {
            type: Number,
            required: true
        },
        
        location: {
            street: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            },
            zip: {
                type: String,
                required: true
            }
        }

    })

module.exports = mongoose.model('ShiftTemplate', shiftTemplateSchema)
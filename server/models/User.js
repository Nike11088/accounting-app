const { Schema, model } = require('mongoose')

const schema = new Schema(
    {
        name: String,
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        sex: {
            type: String,
            enum: ['male', 'female']
        }
    },
    {
        timestamps: true
    }
)

module.exports = model('User', schema)

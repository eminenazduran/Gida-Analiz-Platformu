const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Lütfen bir isim girin'],
        },
        email: {
            type: String,
            required: [true, 'Lütfen bir email adresi girin'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Lütfen bir şifre girin'],
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },
        allergies: {
            type: [String],
            default: [],
        },
        dietary_preferences: {
            type: [String], // e.g. 'vegan', 'gluten-free'
            default: [],
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;

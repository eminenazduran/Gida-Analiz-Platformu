const mongoose = require('mongoose');

const foodSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Lütfen gıda adını girin'],
        },
        brand: {
            type: String,
        },
        barcode: {
            type: String,
            unique: true,
            sparse: true, // Allows null/missing values to not conflict with unique
        },
        ingredients: {
            type: [String],
            required: true,
            default: [],
        },
        allergens: {
            type: [String],
            default: [],
        },
        nutritional_values: {
            calories: { type: Number, default: 0 },
            protein: { type: Number, default: 0 },
            carbohydrates: { type: Number, default: 0 },
            fat: { type: Number, default: 0 },
            sugar: { type: Number, default: 0 },
            sodium: { type: Number, default: 0 },
        },
        is_vegan: {
            type: Boolean,
            default: false,
        },
        is_gluten_free: {
            type: Boolean,
            default: false,
        },
        additives: {
            type: [String],
            default: [],
        },
        health_warnings: {
            type: [String],
            default: [],
        }
    },
    {
        timestamps: true,
    }
);

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;

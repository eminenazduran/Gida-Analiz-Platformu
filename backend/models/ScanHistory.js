const mongoose = require('mongoose');

const scanHistorySchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        food: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Food',
        },
        barcode_scanned: {
            type: String, // If barcode was scanned but not found in DB
        },
        scan_result: {
            type: String, // e.g. "Safe to eat", "Contains Allergen"
        },
        detected_allergens: {
            type: [String],
            default: [],
        },
        notes: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

const ScanHistory = mongoose.model('ScanHistory', scanHistorySchema);

module.exports = ScanHistory;

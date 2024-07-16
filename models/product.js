
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true, // Remove extra whitespace
        minlength: [3, 'Product name must be at least 3 characters long'],
        maxlength: [100, 'Product name cannot exceed 100 characters']
    },
    image: { 
        type: String, 
        required: [true, 'Image URL is required'] 
    },
    edition: {
        type: String,
        required: [true, 'Edition is required'],
        trim: true
    },
    feature: {
        type: Boolean,
        default: true
    },
    year: {
        type: Number,
        required: [true, 'Year is required'],
        min: [1900, 'Year must be after 1900'], // Adjust the minimum year as needed
        max: [new Date().getFullYear(), 'Year cannot be in the future'] // Ensure the year is not in the future
    },
    vol: {
        type: Number,
        required: [true, 'Volume is required'],
        min: [1, 'Volume must be at least 1'] // Ensure volume is positive
    },
    issue: {
        type: Number,
        default: 324,
        min: [0, 'Issue number cannot be negative'] // Ensure issue number is non-negative
    },
    company: {
        type: String,
        required: [true, 'Company is required'],
        trim: true
    },
    pdfLink: { 
        type: String, 
        required: [true, 'PDF link is required'] 
    }
}, { timestamps: true }); // Add timestamps to automatically track creation and update times

// Add compound index if you frequently query by both vol and edition
productSchema.index({ vol: 1, edition: 1 });

module.exports = mongoose.model("Product", productSchema);
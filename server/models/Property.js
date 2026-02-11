const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    location: { type: String, required: true },
    images: [{ type: String }],
    type: { type: String, enum: ['Residential', 'Commercial'], default: 'Residential' },
    status: { type: String, enum: ['Available', 'Sold', 'Upcoming'], default: 'Available' },
    amenities: [{ type: String }],
    details: {
        bedrooms: { type: Number },
        bathrooms: { type: Number },
        area: { type: String },
    },
    featured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Property', propertySchema);

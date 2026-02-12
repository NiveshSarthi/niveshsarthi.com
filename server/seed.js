const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const Property = require('./models/Property');

dotenv.config();

// Read properties from JSON file
const jsonPath = path.join(__dirname, '..', 'nivesh_sarthi.properties.json');
const rawData = fs.readFileSync(jsonPath, 'utf8');
const propertiesFromJson = JSON.parse(rawData);

// Transform the data to remove MongoDB-specific fields
const properties = propertiesFromJson.map(prop => ({
    title: prop.title,
    description: prop.description,
    price: prop.price,
    location: prop.location,
    images: prop.images,
    type: prop.type,
    status: prop.status,
    amenities: prop.amenities,
    details: prop.details,
    featured: prop.featured
}));

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB for seeding');

        // Clear existing properties
        await Property.deleteMany({});
        console.log('Cleared existing properties');

        // Insert new properties
        await Property.insertMany(properties);
        console.log(`Database seeded successfully with ${properties.length} properties`);

        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDB();

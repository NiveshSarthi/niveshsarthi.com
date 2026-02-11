const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Property = require('./models/Property');

dotenv.config();

const properties = [
    {
        title: 'The Sovereign Suites',
        description: 'Ultra-luxury sky villas with private pools and landscaped terraces.',
        price: '₹12.5 Cr onwards',
        location: 'Golf Course Road, Gurugram',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuC7-KG8AQ_yxeB4TAB2fCeZFEcfOCIeL33tQ6uSBC1GJ90EnU30IuNlBOVTP6bxViY2MEXILlh2BXe2WKyoGA2WZWKuOLW9Xu-yDlwnewzy4fnvbSKFwWprKOWgSgKhBRKRBxby-c7Qaas8nhduVgG6okSHY_GoxSP8nMqzVTHTiYF375CrA4O8_r6CmccbSjLOc2QM5IQDO0pzzuy1EN5XNXI-9Qct7_Dn6_s5vTOsnao4SlnliX5VBqlVWS9trt21t87ZXU2LbpgV'],
        type: 'Residential',
        status: 'Available',
        amenities: ['Private Pool', 'Gym', 'Concierge', 'Sky Lounge'],
        details: { bedrooms: 4, bathrooms: 5, area: '5500 sqft' },
        featured: true
    },
    {
        title: 'Empire Estate',
        description: 'A masterpiece of contemporary architecture in the heart of the business district.',
        price: '₹8.9 Cr onwards',
        location: 'Central Business District, Gurugram',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuAcfI9UJBrht-qdKQxbVy1NCp6yZXr-VgI0lvxIZFSVHafb24H4fKjjapuqfm7LGav6qwZ1tUg-M1Tz4JxFRVTJq3FIlPdFTlZGMQraXQZkMX-xBikQTMcG4Fvya6XqOYkf6JrE3tek1MnjbHhMgRs2nPN6_0KONwDT3pinqn6y92fHzXkAVeUQVcc7SrQKW7Ug1mVtxU2y5aAWUVbiPWcraC_gVWEGrizoc1AFG_glkw6xp1OM8WsZGosnxwvL1voLxYWSB1XkEbHn'],
        type: 'Residential',
        status: 'Available',
        amenities: ['Infinity Pool', 'Spa', 'Yoga Studio', 'Smart Home'],
        details: { bedrooms: 3, bathrooms: 4, area: '3800 sqft' },
        featured: true
    },
    {
        title: 'Azure Tower',
        description: 'Luxury apartments with 360-degree city views and premium finishes.',
        price: '₹5.5 Cr onwards',
        location: 'Sector 54, Gurugram',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuAcfI9UJBrht-qdKQxbVy1NCp6yZXr-VgI0lvxIZFSVHafb24H4fKjjapuqfm7LGav6qwZ1tUg-M1Tz4JxFRVTJq3FIlPdFTlZGMQraXQZkMX-xBikQTMcG4Fvya6XqOYkf6JrE3tek1MnjbHhMgRs2nPN6_0KONwDT3pinqn6y92fHzXkAVeUQVcc7SrQKW7Ug1mVtxU2y5aAWUVbiPWcraC_gVWEGrizoc1AFG_glkw6xp1OM8WsZGosnxwvL1voLxYWSB1XkEbHn'],
        type: 'Residential',
        status: 'Available',
        amenities: ['Clubhouse', 'Tennis Court', 'Park'],
        details: { bedrooms: 3, bathrooms: 3, area: '2800 sqft' },
        featured: false
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB for seeding');
        await Property.deleteMany({});
        await Property.insertMany(properties);
        console.log('Database seeded successfully');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding database:', error);
    }
};

seedDB();

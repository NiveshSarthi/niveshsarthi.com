const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');


dotenv.config({ path: path.join(__dirname, '.env') });

// Environment Variable Validation
if (!process.env.MONGODB_URI) {
    console.error('ERROR: MONGODB_URI is not defined in the environment variables.');
    console.error('Current Environment:', process.env.NODE_ENV);
    process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middleware
app.use(helmet()); // Set security HTTP headers
app.use(mongoSanitize()); // Data sanitization against NoSQL query injection

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use('/api/', limiter);

// Middleware
app.use(cors());
app.use(express.json({ limit: '10kb' })); // Body parser, limiting data size

// Routes
const propertyRoutes = require('./routes/propertyRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Routes Middleware
app.use('/api/properties', propertyRoutes);
app.use('/api/contacts', contactRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get(/.*/, (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('Nivesh Sarthi API is running (Development Mode)...');
    });
}

// Global Error Handler (Hides stack traces in production)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'An internal server error occurred',
        error: process.env.NODE_ENV === 'production' ? {} : err
    });
});

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route for testing
app.get('/', (req, res) => {
    res.send('Akıllı Gıda Platformu API Çalışıyor...');
});

// Import models to ensure they are registered in Mongoose
require('./models/User');
require('./models/Food');
require('./models/ScanHistory');

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Sunucu ${PORT} portunda başarıyla çalışıyor`));

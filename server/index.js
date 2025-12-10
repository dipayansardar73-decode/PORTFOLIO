const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Transporter Code (DISABLED FOR SIMULATION)
/*
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
*/

// Routes
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    console.log("========================================");
    console.log(" [SIMULATION MODE] New Contact Message");
    console.log("========================================");
    console.log(` FROM: ${name} (${email})`);
    console.log(" MESSAGE:");
    console.log(message);
    console.log("========================================");

    // Simulate network delay
    setTimeout(() => {
        res.status(200).json({ success: true, message: 'Simulation: Email sent successfully!' });
    }, 1000);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

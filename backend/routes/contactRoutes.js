const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');

const nodemailer = require('nodemailer');

// @desc    Create a new contact message
// @route   POST /api/contact
// @access  Public
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    console.log('Received contact form submission:', { name, email, message });

    if (!name || !email || !message) {
        console.log('Validation failed: Missing fields');
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    try {
        // Save to Database
        const newMessage = await ContactMessage.create({
            name,
            email,
            message,
        });

        // Send Email Notification
        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECEIVER, // Send to the configured receiver
            subject: `Portfolio Contact: ${name}`,
            text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error('Error sending email:', err);
                // Don't fail the request if email fails, but log it
            } else {
                console.log('Email sent successfully:', info.response);
            }
        });

        res.status(201).json(newMessage);
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;

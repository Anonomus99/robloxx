const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jaiswal.shubh2021@gmail.com',
        pass: 'YOUR_GMAIL_APP_PASSWORD'
    }
});

app.post('/send-email', (req, res) => {
    const { subject, message } = req.body;

    const mailOptions = {
        from: 'jaiswal.shubh2021@gmail.com',
        to: 'jaiswal.shubh2021@gmail.com',
        subject: subject,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
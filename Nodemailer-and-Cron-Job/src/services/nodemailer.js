import dotenv from 'dotenv';
dotenv.config();

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    }
});


export function sendEmail() {
    const mailOptions = {
        from: process.env.EMAIL,
        to: 'abc@example.com',
        subject: 'Schedule Email Test',
        text: 'Hello! This email was sent automatically',
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    }, 5 * 60 * 1000);

}
import cron from 'node-cron';
import { sendEmail } from '../services/nodemailer.js';

cron.schedule('*/5 * * * *', () => {
    console.log('Sending Email.....');
    sendEmail();
});


console.log('Cron job scheduled! Check your emails');







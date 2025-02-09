import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import './src/jobs/scheduler.js'

const app = express();
app.use(cors());


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running on PORT:${PORT}`);
})
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';    

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(()=>{
        console.log('Connected to MongoDB');
    }).catch((err)=>{
        console.error('Failed to connect to MongoDB', err);
    });


app.listen(3000, () => {
    console.log('API server is running on http://localhost:3000');
});

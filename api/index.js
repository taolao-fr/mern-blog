import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';    
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

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

app.use (express.json());
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {    
    //console.log('Signup request body:', req.body);
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        next (errorHandler(400, 'All fields are required'));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User ({ 
        username: username, 
        email: email, 
        password: hashedPassword
    });

    try {
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        //console.error('Error during user signup:', error);
        next(error);
    }    
}
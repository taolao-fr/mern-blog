import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {    
    //console.log('Signup request body:', req.body);
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({ message: 'All fields are required' });
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
        res.status(500).json({ message: error.message });
    }    
}
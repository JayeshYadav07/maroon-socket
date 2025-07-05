import 'dotenv/config';
import jwt from 'jsonwebtoken';
const login = (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please enter username and password'
            });
        }
        if (username !== 'admin' || password !== 'password') {
            return res.status(401).json({
                success: false,
                message: 'Invalid username or password'
            });
        }
        // Generate JWT token
        const token = jwt.sign({ username }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        });
        return res.status(200).json({
            success: true,
            message: 'Login successful',
            data: {
                ACCESS_TOKEN: token
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

const signup = (req, res) => {
    res.send('signup');
};

export { login, signup };

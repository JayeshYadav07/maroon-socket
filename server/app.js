import 'dotenv/config';
import express from 'express';
import authRoutes from './routes/authRoutes.js';

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(PORT, () =>
    console.log(`Server is listening on port: ${PORT} at host: ${HOST}`)
);

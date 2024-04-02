import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db';
import shortUrl from './routes/shortUrl';
dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));

app.use("/api", shortUrl);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

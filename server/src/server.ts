import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db';
import shortUrl from './routes/shortUrl';
import path from 'path';
dotenv.config();

connectDB();

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));

app.use("/", express.static(path.join(__dirname, "../../client/dist")));

app.use("/api", shortUrl);

app.get("*", (req: Request, res:Response) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

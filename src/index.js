import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import indexRouter from './routes/index.routes.js'

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors())

// middleware
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

//route
app.use(indexRouter)

//Routes public 
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000)
console.log('Server listening on port 3000!')

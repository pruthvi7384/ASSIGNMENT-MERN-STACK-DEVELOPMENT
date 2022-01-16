import express from 'express';
import cors from 'cors';
import Router from './Routes/route.js';
import cookieParser from 'cookie-parser';

const app = express();

//========== For The Json Formate Understand Backend Server===========
app.use(express.json());

// ========For Not Sequare Connection========
app.use(cors());

// ============use Cookie Parser==========
app.use(cookieParser());

// =======Runing Port Define Here========
const port = process.env.PORT || 8000;

// =======All Route Call Here========
app.use(Router);

// =======Server Listning Here========
app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}`);
});
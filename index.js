import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import { route } from './src/routes/galeria.routes.js';
import { connectToDatabase } from "./src/database/database.js";
// --------------------------------------------------- Imports -------------------------------

dotenv.config();
const app = express();
connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/galleries', route);

// ------------------------------------------- Porta ---------------------------------
const port = process.env.PORT || 3005;

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port} do servidor.`);
})

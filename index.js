import express from "express";
import cors from "cors";
import { route } from './src/routes/galeria.routes.js';
import { connectToDatabase } from "./src/database/database.js";
// --------------------------------------------------- Imports -------------------------------


const app = express();
connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/galerias', route);

// ------------------------------------------- Porta ---------------------------------
const port = 3005;

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port} do servidor.`);
})

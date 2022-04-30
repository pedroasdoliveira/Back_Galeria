const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const route = require('./src/routes/galeria.routes.js');
const connectToDatabase = require('./src/database/database.js')
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

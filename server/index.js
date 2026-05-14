const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
require('dotenv').config();

const app = express();

app.use(cors()); 
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Serveur Express opérationnel');
});


sequelize.authenticate()
    .then(() => {
        console.log('Connexion MySQL réussie avec Sequelize');
    })
    .catch(err => {
        console.error('Impossible de se connecter à la base de données :', err);
    });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
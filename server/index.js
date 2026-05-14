require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const Artisan = require('./models/Artisan');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/artisans', async (req, res) => {
    try {
        const artisans = await Artisan.findAll();
        res.json(artisans);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération", error });
    }
});

app.get('/api/top-artisans', async (req, res) => {
    try {
        const topArtisans = await Artisan.findAll({ where: { top_artisan: true } });
        res.json(topArtisans);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
});

const PORT = process.env.PORT || 5000;

sequelize.authenticate()
    .then(() => {
        console.log('Connexion MySQL réussie avec Sequelize');
        app.listen(PORT, () => {
            console.log(`Serveur lancé sur http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Erreur de connexion database:', err);
    });
const express = require('express'); // import express
const port = 5000; // port to run server on

const app = express(); // create express app

/** Middleware : permet de traiter les données avant de les envoyer au client (Req) 
ou 
avant de les envoyer à la base de données (Res) (ex : vérifier si l'utilisateur est connecté avant de lui envoyer les données)  ; **/
app.use(express.json()); // use express middleware to parse json bodies
app.use(express.urlencoded({ extended: false })); // use express middleware to parse urlencoded bodies

app.use("/post", require("./routes/post.routes")); // use post routes for requests to /post


//Lancer le serveur : node server.js
app.listen({port}, () => console.log(`Le serveur a démarré sur le port ${port}`)); // listen for requests
const mongoose = require('mongoose');   // import mongoose

const postSchema = mongoose.Schema( // création du schéma de données
  {
    title: {
      type: String, // type du message
      required: true,
    },
    picture: {
      type: String, // image du message
      required: true,
    },
    message: {
      type: String, // type du message
      required: true,
    },
    author: {
      type: String, // type de l'auteur
      required: true,
    },
    likers: {
      type: [String], // tableau de strings
    },
  },
  {
    timestamps: true, // ajoute automatiquement createdAt et updatedAt
  }
);

module.exports = mongoose.model('Post', postSchema); // export du modèle de données

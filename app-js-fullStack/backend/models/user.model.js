const mongoose = require('mongoose');   // import mongoose

const userSchema = mongoose.Schema( // création du schéma de données

    {
        _id: mongoose.Schema.Types.ObjectId, // type de l'id généré automatiquement

        firstName: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true, 
            validate: {
                validator: function (v) {
                    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(v);
                },
                message: props => `${props.value} n'est pas une adresse e-mail valide!`
            },


        }

);

module.exports = mongoose.model('User', userSchema); // export du modèle de données
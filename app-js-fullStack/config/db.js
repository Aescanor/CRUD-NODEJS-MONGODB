const mongoose = require('mongoose'); // import mongoose
const dotenv = require('dotenv'); // import dotenv
dotenv.config(); // configure dotenv, so we can use process.env variables

const connectDB = async () => { // create function to connect to database
  try { // try to connect to database
    await mongoose.connect(process.env.MONGO_URI, {  // connect to database
      useNewUrlParser: true, // must be set to true
      useUnifiedTopology: true, // must be set to true
    });
    console.log('Connecté à MongoDB !');  // log message
  } catch (error) { // catch error if cannot connect to database
    console.error('Erreur de connection à MongoDB:', error.message); // log error message
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB; // export function

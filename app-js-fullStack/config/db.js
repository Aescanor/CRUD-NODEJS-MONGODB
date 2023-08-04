const mongoose = require('mongoose');

const connectDB = async () => { 
try{
    mongoose.set('strictQuery', false); // pour éviter les erreurs de requêtes
    mongoose.connect(process.env.MONGO_URI, ()=> console.log ('Mongo connecté !') ); // connect to database
}catch (err){
    console.log(err);
    process.exit(); // exit with failure
}

};

module.exports = connectDB; // export function so it can be used by other parts of the <application></application>
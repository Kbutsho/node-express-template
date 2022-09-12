const { magenta, bold } = require('colorette');
const mongoose = require('mongoose');
require('dotenv').config(); 

const dbConnection = () => {
    mongoose.connect(process.env.DATABASE_LOCAL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(magenta(bold("Database connected successfully!")));
        }
    }); 
}
module.exports = dbConnection;      
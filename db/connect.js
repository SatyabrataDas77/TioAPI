const mongoose = require('mongoose');

const connectDB = (uri) => {
    console.log("connect db");
    return mongoose.connect(uri); // Deprecated options removed
};

module.exports = connectDB;
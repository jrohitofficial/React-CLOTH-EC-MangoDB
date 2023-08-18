const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
    console.log(`mongodb is connected with server: ${process.env.DB_URL}`);
    })
}

module.exports = connectDatabase
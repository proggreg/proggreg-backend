const mongoose = require('mongoose');
const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = dbConnect;
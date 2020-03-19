const mongoose = require('mongoose');
const config = require('config');
<<<<<<< HEAD
const db = config.get('MONGO_URI');
=======
const db = config.get('mongoURI');
>>>>>>> 4ed2bdeee0fc0ce9c5c215c0d8d40284375346e3

const connectDB = async () => {
  try {
    await mongoose
      .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      });
    console.log('MongoDB Connected...')
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
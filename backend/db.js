const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/testing"

const connectToMongo = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('Connected to Mongo Successfully');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  };

module.exports = connectToMongo;
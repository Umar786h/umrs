// models/Record.js

const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Record = mongoose.model('Record', recordSchema);

module.exports = Record;

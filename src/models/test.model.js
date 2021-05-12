const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const body = {
  reader: Number,
  ReceiptHandle: String
};

const options = {
  collection: 'Tests',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
};

const TestSchema = Schema(body, options);

const Test = mongoose.model('Tests', TestSchema);

module.exports = Test;

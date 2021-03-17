const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const body = {
  matricula: String,
  nome: String,
  contato: String,
  description: String,
  image: String
};

const options = {
  collection: 'Forms',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
};

const FormSchema = Schema(body, options);

const Form = mongoose.model('Forms', FormSchema);

module.exports = Form;

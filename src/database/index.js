const mongoose = require('mongoose')
const { database } = require('../configs')

mongoose.connect(database.connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', function () {
  console.log(`Mongo conectado.`);
});

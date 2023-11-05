const { connect, connection } = require('mongoose');

connect(process.env.MONGO_URI ||'mongodb://localhost/jokes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
const mysql = require('mysql2');

module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'irvan',
  password: '1ndonesiAr@ya',
  database: 'belajar_sequelize'
});

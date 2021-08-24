const mysql = require('mysql2');

exports.connect = () => {
    const connection = mysql.createConnection({
        host     : process.env.DB_HOST,
        port     : process.env.DB_PORT,
        user     : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_BASENAME,
        charset: 'utf8_general_ci'
  });
  return connection;
}
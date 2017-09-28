const mysql = require('mysql');

const cnn = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'sasa',
        database: 'casadocodigo_nodejs'
    });
}

module.exports = cnn;
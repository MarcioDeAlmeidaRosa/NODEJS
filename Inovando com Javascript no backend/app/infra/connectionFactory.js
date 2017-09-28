const mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'sasa',
        database: 'casadocodigo_nodejs'
    });
}
//wrapper, pois o express-load já executava a construção da função, 
//agora ao excecutar a construção, será devolvido outra função
module.exports = () => {
    return createDBConnection;
};
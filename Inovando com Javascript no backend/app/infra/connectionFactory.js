const mysql = require('mysql');

function createDBConnection() {
    console.log('process.env.NODE_ENV --> ', process.env.NODE_ENV);
    if (!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'sasa',
            database: 'casadocodigo_nodejs'
        });
    }

    if (process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'sasa',
            database: 'casadocodigo_nodejs_test'
        });
    }
}
//wrapper, pois o express-load já executava a construção da função, 
//agora ao excecutar a construção, será devolvido outra função
module.exports = () => {
    return createDBConnection;
};
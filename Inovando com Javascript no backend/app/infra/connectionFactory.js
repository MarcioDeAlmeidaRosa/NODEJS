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

    if (process.env.NODE_ENV == 'production') {
        let urlCnn = process.env.CLEARDB_DATABASE_URL;
        let grupos = urlCnn.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/);
        return mysql.createConnection({
            host: grupos[3],
            user: grupos[1],
            password: grupos[2],
            database: grupos[4]
        });
    }

}
//wrapper, pois o express-load já executava a construção da função, 
//agora ao excecutar a construção, será devolvido outra função
module.exports = () => {
    return createDBConnection;
};
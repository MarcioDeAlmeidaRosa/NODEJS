module.exports = function(app) {
    app.get('/produtos', (req, res) => {
        const mysql = require('mysql');
        const cnn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'sasa',
            database: 'casadocodigo_nodejs'
        });

        cnn.query('select * from livros', (err, result) => {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                console.log(result);
                res.json(result);
            }
        });

        cnn.end();

        //res.render('produtos/lista');
    });
}
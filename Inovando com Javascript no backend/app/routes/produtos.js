const connectionFactory = require('../infra/connectionFactory');

module.exports = function(app) {
    app.get('/produtos', (req, res) => {
        const cnn = connectionFactory();
        cnn.query('select * from livros', (err, result) => {
            if (err) {
                console.log(err);
            }
            res.render('produtos/lista', { lista: result });
        });
        cnn.end();
    });
}
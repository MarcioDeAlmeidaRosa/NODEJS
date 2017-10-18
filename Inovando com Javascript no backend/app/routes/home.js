module.exports = function(app) {
    app.get('/', (req, res) => {
        const cnn = app.infra.connectionFactory();
        const produtoBanco = new app.infra.ProdutosBancoDAO(cnn);
        produtoBanco.lista((err, result, next) => {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.format({
                html: () => {
                    res.render('home/index', { livros: result });
                },
                json: () => {
                    res.json(result);
                },
                xml: () => {
                    res.set('Content-Type', 'text/xml');
                    res.send(xml(result));
                }
            });
        });
        cnn.end();
    });
}
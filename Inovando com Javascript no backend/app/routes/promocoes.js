module.exports = function(app) {
    app.get('/promocoes/form', (req, res, next) => {
        const cnn = app.infra.connectionFactory();
        const produtoBanco = new app.infra.ProdutosBancoDAO(cnn);
        produtoBanco.lista((err, result) => {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.format({
                html: () => {
                    res.render('promocoes/form', { lista: result });
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

    app.post('/promocoes', (req, res) => {
        let promocao = req.body;
        console.log('promocao --> ', promocao);
        //Perceba que utilizamos a boa prática conhecida como Always Redirect After 
        res.redirect('promocoes/form');
    });
}
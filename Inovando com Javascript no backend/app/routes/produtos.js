//após a instalação do express-load e configurado o carregamento automático 
//de algumas estruturas, não é mais necessário usar o require
//pois a estrutura carregada fica carredado para dentro da aplicação 
//respeitando a estrutura de pasta
// const connectionFactory = require('../infra/connectionFactory');

module.exports = function(app) {
    app.get('/produtos', (req, res) => {
        const cnn = app.infra.connectionFactory();
        const produtoBanco = new app.infra.ProdutosBancoDAO(cnn);
        produtoBanco.lista((err, result) => {
            if (err) {
                console.log(err);
            }
            res.render('produtos/lista', { lista: result });
        });
        cnn.end();
    });

    app.get('/produtos/form', (req, res) => {
        res.render('produtos/form');
    });

    app.post('/produtos/salva', (req, res) => {
        const cnn = app.infra.connectionFactory();
        const produtoBanco = new app.infra.ProdutosBancoDAO(cnn);
        const livro = req.body;
        produtoBanco.salvar(livro, (err, result) => {
            console.log(result);
            res.render('produtos/lista', { lista: result });

        });
        cnn.end();
    });
}
//após a instalação do express-load e configurado o carregamento automático 
//de algumas estruturas, não é mais necessário usar o require
//pois a estrutura carregada fica carredado para dentro da aplicação 
//respeitando a estrutura de pasta
// const connectionFactory = require('../infra/connectionFactory');
const xml = require('xml');

module.exports = function(app) {
    app.get('/produtos', (req, res) => {
        const cnn = app.infra.connectionFactory();
        const produtoBanco = new app.infra.ProdutosBancoDAO(cnn);
        produtoBanco.lista((err, result) => {
            if (err) {
                console.log(err);
            }
            res.format({
                html: ()=>{
                    res.render('produtos/lista', { lista: result });
                },
                json: ()=> {
                    res.json(result);
                },
                xml: ()=>{
                    res.set('Content-Type', 'text/xml');
                    res.send(xml(result));
                }
            });
        });
        cnn.end();
    });

    app.get('/produtos/form', (req, res) => {
        res.render('produtos/form');
    });

    app.get('/produtos/novo', (req, res) => {
        res.redirect('/produtos/form');
    });

    app.post('/produtos', (req, res) => {
        const cnn = app.infra.connectionFactory();
        const produtoBanco = new app.infra.ProdutosBancoDAO(cnn);
        const livro = req.body;
        produtoBanco.salvar(livro, (err, result) => {
            res.redirect('/produtos');
        });
        cnn.end();
    });

    app.delete('/produtos/:id', (req, res) => {
        const cnn = app.infra.connectionFactory();
        const produtoBanco = new app.infra.ProdutosBancoDAO(cnn);
        const id = req.params['id'];
        produtoBanco.delete(id, (err, result) => {
            if (err) {
                console.log(err);
            }
            res.json({ err: err });
        });
        cnn.end();
    });
}
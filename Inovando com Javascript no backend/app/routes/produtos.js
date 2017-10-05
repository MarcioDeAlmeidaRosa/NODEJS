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
        render(res, {}, {});
    });

    app.get('/produtos/novo', (req, res) => {
        res.redirect('/produtos/form');
    });

    function render(res, livro, erros){
        return res.render('produtos/form', {livro, erros});
    }

    app.post('/produtos', (req, res) => {
        const cnn = app.infra.connectionFactory();
        const produtoBanco = new app.infra.ProdutosBancoDAO(cnn);
        const livro = req.body;
        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('preco', 'Formato do preço é inválido').isFloat();
        let erros = req.validationErrors();
        if (erros){
            return render(res, livro, erros);
        }
        produtoBanco.salvar(livro, (err, result) => {
            console.log('err --> ', err);
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
//após a instalação do express-load e configurado o carregamento automático 
//de algumas estruturas, não é mais necessário usar o require
//pois a estrutura carregada fica carredado para dentro da aplicação 
//respeitando a estrutura de pasta
// const connectionFactory = require('../infra/connectionFactory');

module.exports = function(app) {
    app.get('/produtos', (req, res) => {
        const cnn = app.infra.connectionFactory();
        const produtoBanco = app.infra.produtoBanco(cnn);
        produtoBanco.lista((err, result) => {
            if (err) {
                console.log(err);
            }
            res.render('produtos/lista', { lista: result });
        });
        cnn.end();
    });
}
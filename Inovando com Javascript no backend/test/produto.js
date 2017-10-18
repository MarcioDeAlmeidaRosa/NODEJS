// const http = require('http');
// const assert = require('assert');

const app = require('../config/express')();
const request = require('supertest')(app);

describe('#ProdutosController', function() {
    //lib para limpar mais de uma tabela (https://github.com/emerleite/node-database-cleaner)
    limpaTabelas = function(cb) {
        var cnn = app.infra.connectionFactory();
        cnn.query('delete from livros', cb);
    }

    beforeEach(function(done) {
        limpaTabelas(function(err, result) {
            if (!err) {
                done();
            }
        });
    });

    afterEach(function(done) {
        limpaTabelas(function(err, result) {
            if (!err) {
                done();
            }
        });
    })

    it('#Listagem (json)', function(done) {
        console.log('Teste de verificação de listagem de json');
        // let conf = {
        //     hostname: 'localhost',
        //     port: 3000,
        //     path: '/produtos',
        //     headers: {
        //         'Accept': 'application/json'
        //     }
        // };

        // http.get(conf, (res) => {
        //     assert.equal(res.statusCode, 200);
        //     assert.equal(res.headers['content-type'], 'application/json; charset=utf-8');
        //     // if (res.statusCode == 200)
        //     //     console.log('Status OK');

        //     // if (res.headers['content-type'] == 'application/json; charset=utf-8')
        //     //     console.log('content-type OK');

        //     done();
        // });

        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200, done);
    });

    it('#Listagem (html)', function(done) {
        request.get('/produtos')
            .set('Accept', 'text/html')
            .expect('content-type', /html/)
            .expect(200, done);
    });

    it('#Novo produto (cadastro inválido)', function(done) {
        request.post('/produtos')
            .send({ titulo: '', descricao: 'Livro 1' })
            .expect(400, done);
    });

    it('#Novo produto (cadastro válido)', function(done) {
        request.post('/produtos')
            .send({ titulo: 'Livro node', descricao: 'Livro 1', preco: 20.50 })
            .expect(302, done);
    });

});
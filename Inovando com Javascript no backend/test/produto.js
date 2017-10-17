// const http = require('http');
// const assert = require('assert');

const app = require('../config/express')();
const request = require('supertest')(app);

describe('#ProdutosController', function() {
    it('Listagem json', function(done) {
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

});
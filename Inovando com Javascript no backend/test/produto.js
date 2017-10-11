const http = require('http');

describe('#ProdutosController', function() {
    it('Listagem json', function(done) {
        console.log('Teste de verificação de listagem de json');
        let conf = {
            hostname: 'localhost',
            port: 3000,
            path: '/produtos',
            headers: {
                'Accept': 'application/json'
            }
        };

        http.get(conf, (res) => {
            // res.on('data', (body) => {
            //     console.log(body + '');
            // });
            if (res.statusCode == 200)
                console.log('Status OK');

            if (res.headers['content-type'] == 'application/json; charset=utf-8')
                console.log('content-type OK');

            done();
        });


    });

});
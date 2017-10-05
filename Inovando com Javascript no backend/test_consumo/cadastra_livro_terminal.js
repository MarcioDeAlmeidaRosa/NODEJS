const http = require('http');
let conf = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
};

var cliente = http.request(conf, (res)=>{
    console.log('res.statusCode -> ', res.statusCode);
    res.on('data', (body)=>{
        console.log(body+'');
    });
});

let produto = {
    titulo: 'mais sobre node',
    descricao: 'node, javascript e um pouco mais sobre httpp',
    preco: 200.12
};

cliente.end(JSON.stringify(produto));
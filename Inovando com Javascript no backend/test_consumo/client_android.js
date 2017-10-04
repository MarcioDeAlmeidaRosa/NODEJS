const http = require('http');
const conf = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    headers: {
        // 'Accept': 'text/html'
        // 'Accept': 'application/json'
        'Accept': 'application/xml'
    }
};
http.get(conf, (res)=>{
    res.on('data', (body)=>{
        console.log(body+'');
    });
});
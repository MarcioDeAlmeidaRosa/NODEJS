const http = require('http');
let conf = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    headers: {
        'Accept': 'text/html'
    }
};
http.get(conf, (res)=>{
    res.on('data', (body)=>{
        console.log(body+'');
    });
});

conf.headers = {
    'Accept': 'application/json'
}

http.get(conf, (res)=>{
    res.on('data', (body)=>{
        console.log(body+'');
    });
});

conf.headers = {
    'Accept': 'application/xml'
}

http.get(conf, (res)=>{
    res.on('data', (body)=>{
        console.log(body+'');
    });
});

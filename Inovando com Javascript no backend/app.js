const app = require('./config/express')();
// removida a linha que servia somente para carregar o arquivo de rotas. 
// var rotasProdutos = require('./app/routes/produtos')(app);

//montamos um servidor http do node js com base nas configurações do exress
const http = require('http').Server(app);
//com o servidor instanciado, serviço o mesmo ara o socket.io
const io = require('socket.io')(http);

//criamos uma variável no express armazenando a referência de io
//assim conseguimos utilizar ele em qualquer ponto que tem acesso
//ao express
app.set('io', io);

const port = process.env.PORT || 3000;

//com a alteração do feita para recuperarmos criarmos um servidor http
//com base no express, precisamos que esse servidor escute a porta 
//para responder as requisições
// app.listen(port, () => {
http.listen(port, () => {
    console.log(`servidor rodando na porta (${port})`);
});
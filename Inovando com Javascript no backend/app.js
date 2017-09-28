const app = require('./config/express')();
// removida a linha que servia somente para carregar o arquivo de rotas. 
// var rotasProdutos = require('./app/routes/produtos')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`servidor rodando na porta (${port})`);
});
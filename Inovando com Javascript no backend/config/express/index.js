const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator')

module.exports = () => {
    const app = express();
    //set usado para definir variável para dentro do express, 
    ///e é compartilhado por toda a aplicação
    app.set('view engine', 'ejs')

    //middle do express que configura uma pasta statica, sendo asssim
    //não é necessário definir rota para conseguir acessar os arquivos
    //esses são arquivos estáticos e podem ser acessados diretamente em 
    //sua url literal, sem precisar de uma rota configurada.
    app.use(express.static('./app/public'));

    //como mudamos a localização da pasta views da 
    //raiz do projeto para dentro da pasta app,
    //se não informarmos ao express isso, ele não
    //localizará as views do projeto
    //PS.: usamos ./ para definir o local pois a 
    //referência base não será o arquivo index.js 
    //dentro de config/empress e sim o arquivo app.js
    //pois é nele que carregamos este módulo
    app.set('views', './app/views');
    //configuração necessária para conseguirmos recuperar o conteúdo vindo no body da requisição
    app.use(bodyParser.urlencoded({ extended: true }));
    //prepara o exppress para permitir receber json
    app.use(bodyParser.json());
    //carrega os validadores do express - a configuraçao da validação 
    //tem que ser definida depois da configuração do body-parser
    app.use(expressValidator());

    //carregando os arquivos de configuração para o express
    load('routes', { cwd: 'app' }) //defini a pasta de será carregada | para o load não ficar procurando em todos diretórios, através do cwd definimos onde esta a pasta que deve ser carregada
        .then('infra') //define após o carregamento principal, qual outra estrutura deverá ser carregada
        .into(app); //determina onde deverá ser carregado o conteúdo carregado pelo load

    //Criando um Middleware para intercepitar rotas que não estão configuradas
    app.use(function(req, res, next) {
        res.status(404).render('erros/404');
        next();
    });

    //Criando um Middleware para ser execuutando quando der algum erro na execução da API
    app.use(function(error, req, res, next) {
        if (process.env.NODE_ENV == 'production') {
            res.status(500).render('erros/500');
            return;
        }
        next(error);
    });


    return app;
}
const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();
    //set usado para definir variável para dentro do express, 
    ///e é compartilhado por toda a aplicação
    app.set('view engine', 'ejs')
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

    //carregando os arquivos de configuração para o express
    load('routes', { cwd: 'app' }) //defini a pasta de será carregada | para o load não ficar procurando em todos diretórios, através do cwd definimos onde esta a pasta que deve ser carregada
        .then('infra') //define após o carregamento principal, qual outra estrutura deverá ser carregada
        .into(app); //determina onde deverá ser carregado o conteúdo carregado pelo load

    return app;
}
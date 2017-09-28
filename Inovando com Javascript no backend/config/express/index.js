const app = require('express')();
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
app.set('views', './app/views')

module.exports = app;
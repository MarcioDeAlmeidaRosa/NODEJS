const app = require('express')();
//set usado para definir variável para dentro do express, 
///e é compartilhado por toda a aplicação
app.set('view engine', 'ejs')

module.exports = app;
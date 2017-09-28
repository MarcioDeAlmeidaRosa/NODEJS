const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//set usado para definir variável para dentro do express, 
///e é compartilhado por toda a aplicação
app.set('view engine', 'ejs')

app.get('/produtos', (req, res) => {
    res.render('produtos/lista');
});

app.listen(port, () => {
    console.log(`servidor rodando na porta (${port})`);
});
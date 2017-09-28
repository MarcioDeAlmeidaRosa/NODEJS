const app = require('./config/express');

app.get('/produtos', (req, res) => {
    res.render('produtos/lista');
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`servidor rodando na porta (${port})`);
});
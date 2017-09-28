const app = require('./config/express');
const rotas = require('./app/routes/produtos')(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`servidor rodando na porta (${port})`);
});
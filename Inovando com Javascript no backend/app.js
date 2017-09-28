const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/produtos', (req, res) => {
    res.send('<html><body><h1>Listagem de produto</h1></body></html>')
});

app.listen(port, () => {
    console.log(`servidor rodando na porta (${port})`);
});
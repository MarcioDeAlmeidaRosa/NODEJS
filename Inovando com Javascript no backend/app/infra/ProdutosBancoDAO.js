function ProdutosBancoDAO(cnn) {
    this._cnn = cnn;
}

ProdutosBancoDAO.prototype.lista = function(cb) {
    this._cnn.query('select * from livros', cb);
}

ProdutosBancoDAO.prototype.salvar = function(livro, cb) {
    this._cnn.query('insert into livros set ?', livro, cb);
}

module.exports = function() {
    return ProdutosBancoDAO;
}
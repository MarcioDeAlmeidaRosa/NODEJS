function ProdutosBancoDAO(cnn) {
    this._cnn = cnn;
}

ProdutosBancoDAO.prototype.lista = function(cb) {
    this._cnn.query('select * from livros', cb);
}

ProdutosBancoDAO.prototype.salvar = function(livro, cb) {
    this._cnn.query('insert into livros set ?', livro, cb);
}

ProdutosBancoDAO.prototype.delete = function(id, cb) {
    this._cnn.query('DELETE FROM livros WHERE id = ?', id, cb);
}

module.exports = function() {
    return ProdutosBancoDAO;
}
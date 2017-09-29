function ProdutosBancoDAO(cnn) {
    this._cnn = cnn;
}

ProdutosBancoDAO.prototype.lista = function(cb) {
    this._cnn.query('select * from livros', cb);
}

module.exports = function() {
    return ProdutosBancoDAO;
}
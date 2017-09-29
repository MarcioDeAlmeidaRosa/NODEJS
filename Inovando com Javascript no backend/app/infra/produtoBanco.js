module.exports = function() {
    return function(cnn) {
        this.lista = function(cb) {
            cnn.query('select * from livros', cb);
        }
        console.log(this);
        return this;
    }
}
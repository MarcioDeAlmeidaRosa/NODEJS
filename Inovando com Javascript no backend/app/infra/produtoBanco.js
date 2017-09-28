module.exports = () => {
    this.lista = (cnn, cb) => {
        cnn.query('select * from livros', cb);
    }
    return this;
}
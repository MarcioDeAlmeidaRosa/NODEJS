module.exports = () => {
    return (cnn) => {
        this.lista = (cb) => {
            cnn.query('select * from livros', cb);
        }
        return this;
    }
}
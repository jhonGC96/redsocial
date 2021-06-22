const controladorUsuario = require('../controlador/controlador.usuarios')

//Exportar nuestros endpoint

module.exports = async (app) => {

    app.post('/userown/:id/tecnologia', async (req, res) => {
        let usr = req.params.id
        res.render
    })


}
const controladorLogin = require('../controlador/controlador.login')
const miperfil = require('../controlador/controlador.completarperfil')


//Exportar nuestros endpoint

module.exports = async(app) => {

    //Rutas para foto//

    //alta foto
    app.get('/userown/:id/upload-foto', async(req, res) => {
        try {
            res.render("subirfoto")
        } catch (error) {
            console.log(err)
            res.estatus(400).json('No se pudo abrir la pagina')
        }
    })

    app.post('/userown/:id/upload-foto', controladorLogin.verificacion, async(req, res) => {
        let data = req.body
        try {
            await controladorUsuario.altaUsuarios(alta)
            res.redirect('/userown/:id/tecnologias')
        } catch (error) {

        }

    })

    //Rutas para completar perfil//

    //guardar datos 

    app.get('/userown/:id/tecnologias', async(req, res) => {
        try {
            res.render("tecnologias")
        } catch (error) {
            console.log(err)
            res.estatus(400).json('No se pudo abrir la pagina')
        }
    })

    app.post('/userown/:id/tecnologias', controladorLogin.verificacion, async(req, res) => {
        let usr = req.params
        let data = req.body
        console.log(data);
        try {
            await miperfil.altaTecnoUser(data, usr)
            res.json ('ok')
        } catch (error) {
            console.log('oh no, algo salio mal!');
        }

    })



}
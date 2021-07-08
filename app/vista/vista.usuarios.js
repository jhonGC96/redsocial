//Importación de modulos dados por el controlador
const controladorUsuario = require('../controlador/controlador.usuarios')
const validar = require('../controlador/controlador.validacion')

//Exportación de módulos
module.exports = (app) => {

    //rutas para mostrar la plantilla de usuario
    app.get('/userown/:id', async(req, res) => {
        let usr = req.params.id
        try {
            let resultado = await controladorUsuario.listarUsuarios(usr)
            let tablas = await controladorUsuario.obtenerTablas(usr)
            res.render("main", {
                data: resultado,
                tablas
            })
        } catch (error) {
            console.log(err)
            res.estatus(400).json('No se pudo abrir la pagina')
        }
    })

    app.get('/uservisit/:id', async(req, res) => {
        let usr = req.params.id
        try {
            let resultado = await controladorUsuario.listarUsuarios(usr)
            let tablas = await controladorUsuario.obtenerTablas(usr)
            res.render("maininvitado", {
                data: resultado,
                tablas
            })
        } catch (error) {
            console.log(err)
            res.estatus(400).json('No se pudo abrir la pagina')
        }
    })

    app.get('/listarusuarios', async(req, res) => {
        //Control de errores
        try {
            let resultado = await controladorUsuario.listarUsuarios()
            res.render("listarusuario", {
                data: resultado[0]
            })
        } catch (e) {
            console.log(e);
        }
    })

    //esta ruta muestra el formulario para registrarse

    //esta ruta guarda usuario
    app.post('/saveuser', validar.checkUser, async(req, res) => {
        let alta = req.body
        console.log(alta);
        try {
            let resultado = await controladorUsuario.chequearUsuario(alta)
            if (resultado) {
                throw new Error('El usuario ya esta registrado')
            } else {
                await controladorUsuario.altaUsuarios(alta)
                res.json('ok')
            }
        } catch (err) {
            res.status(400).json({ error: err.message })
        }
    })


}
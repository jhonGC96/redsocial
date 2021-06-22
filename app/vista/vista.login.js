const controladorLogin = require('../controlador/controlador.login')
const controladorUsuario = require('../controlador/controlador.usuarios')

//Exportar nuestros endpoint

module.exports = async (app) => {

    app.get('/hi', controladorLogin.verificacion, async (req, res) => {
        res.json('ok')
    })

    app.get('/userown/:id', async (req, res) => {
        let usr = req.params.id
        try {
            let resultado = await controladorUsuario.listarUsuarios(usr)
            res.render("main", {
                data: resultado 
            })
        } catch (error) {
            console.log(err)
            res.estatus(400).json('No se pudo abrir la pagina')
        }
    })

    app.get('/uservisit/:id', async (req, res) => {
        let usr = req.params.id
        try {
            let resultado = await controladorUsuario.listarUsuarios(usr)
            //console.log(resultado);
            res.render("main", {
                data: resultado
            })
        } catch (error) {
            console.log(err)
            res.estatus(400).json('No se pudo abrir la pagina')
        }
    })


    app.get('/login', async (req, res) => {
        try {
            res.render("login")
        } catch (error) {
            console.log(err)
            res.estatus(400).json('No se pudo abrir la pagina')
        }
    })


    app.post('/login', async (req, res) => {
        let usuario = req.body
        try {
            let resultado = await controladorLogin.chequearUsuario(usuario)
            if (resultado) {
                let usuarioInfo = await controladorLogin.datosUsuario(usuario)
                let tokenResult = await controladorLogin.generaToken(usuario)
                res.json({ token: tokenResult, username_usuario: usuarioInfo })
            } else {
                res.json('usuario incorrecto')
            }
        } catch (err) {
            console.log(err)
            res.status(400).json('Usuario o contrasena incorrecta')
        }
    })

}
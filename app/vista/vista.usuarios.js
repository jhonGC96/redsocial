//Importación de modulos dados por el controlador
const controladorUsuario = require('../controlador/controlador.usuarios')
const verificacion = require('../controlador/controlador')

//Exportación de módulos
module.exports = (app) => {

    //rutas para mostrar la plantilla de usuario
    app.get('/userown/:id', async(req, res) => {
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

    app.get('/uservisit/:id', async(req, res) => {
        let usr = req.params.id
        try {
            let resultado = await controladorUsuario.listarUsuarios(usr)
                //console.log(resultado);
            res.render("", {
                data: resultado
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
    app.post('/saveuser', async(req, res) => {
        let alta = req.body
            //console.log(alta);
        try {
            let resultado = await controladorUsuario.chequearUsuario(alta)
            if (resultado) {
                throw new Error('El usuario ya esta registrado')
            } else {
                await controladorUsuario.altaUsuarios(alta)
                res.redirect('/userown/:id/tecnologias')
            }
        } catch (err) {
            res.status(400).json({ error: err.message })
        }
    })

    /*Método get para acutlizar el usuario dado por un ID
    app.get('/updateUsuario/:id_usuario', async(req, res) => {
        //Creacion de objeto
        let update = req.params.id_usuario
            //Control de errores
        try {
            let resultado = await controladorUsuario.updateUsuario(update)
            res.render('editarusuario', {
                data: resultado[0]
            })
        } catch (e) {
            console.log(e);
        }
    })

    app.post('/updateUsuario/:id_usuario', async(req, res) => {
        let id = req.params.id_usuario
        let update = req.body
        try {
            await controladorUsuario.saveUpdateUsuario(update, id)
            res.redirect('/listarusuarios')
        } catch (e) {
            console.log(e);
        }
    })*/

    //Metodo get para dar de baja usuario dado por un ID
    app.get('/bajaUsuario/:id_usuario', async(req, res) => {
        //Creacion de objeto
        const baja = req.params.id_usuario
            //Control de errores
        try {

            //Uso de objetos
            await controladorUsuario.bajaUsuario(baja)
            let resultado = await controladorUsuario.bajaUsuario(baja)

            res.redirect('/listarusuarios')
        } catch (err) {
            console.log(err);
        }
    })

}
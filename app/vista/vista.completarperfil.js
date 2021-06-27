const controladorLogin = require('../controlador/controlador.login')
const miperfil = require('../controlador/controlador.completarperfil')


//Exportar nuestros endpoint     //Rutas para completar perfil//

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


    //guardar datos de tecnologias

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
            res.json('ok')
        } catch (error) {
            console.log('oh no, algo salio mal!');
        }

    })

    //guardar datos de conocimientos

    app.get('/userown/:id/conocimientos', async(req, res) => {
        id = req.params
        try {
            let resultado = await miperfil.getTabla()
            res.render("conocimientos", {
                data: resultado,
                nombretabla: 'Conocimientos'
            })

        } catch (error) {
            console.log(err)
            res.estatus(400).json('No se pudo abrir la pagina')
        }
    })

    app.post('/userown/:id/conocimientos', controladorLogin.verificacion, async(req, res) => {
        let usr = req.params
        let data = req.body
        try {
            await miperfil.altaConocimientoUser(data, usr)
            res.json('ok')
        } catch (error) {
            console.log('oh no, algo salio mal!');
        }

    })

    //ruta para obtener todas las tablas de perfil

    app.get('/obtenerTablas', async(req, res) => {
        try {
            let tablas = await miperfil.obtenerTablas()
            console.log(tablas);
            res.json(tablas)
        } catch (error) {
            console.log('oh no, algo salio mal!');
        }
    })


    //rutas para desempeno

    app.get('/userown/:id/desempeno', async(req, res) => {
        try {
            let resultado = await miperfil.obtenerTabladesempeno()
            res.render("desempeno", {
                data: resultado
            })

        } catch (error) {
            console.log(err)
            res.estatus(400).json('No se pudo abrir la pagina')
        }
    })

    app.post('/userown/:id/desempeno', controladorLogin.verificacion, async(req, res) => {
        let usr = req.params
        let data = req.body
        try {
            await miperfil.altaDesempenoUser(data, usr)
            res.json('ok')
        } catch (error) {
            console.log('oh no, algo salio mal!');
        }

    })

    //rutas para habilidades blandas

    app.get('/userown/:id/habilidad', async(req, res) => {
        try {
            let resultado = await miperfil.obtenerTablas()
            res.render("habilidadesblandas", {
                data: resultado
            })

        } catch (error) {
            console.log(err)
            res.estatus(400).json('No se pudo abrir la pagina')
        }
    })

    app.post('/userown/:id/habilidad', controladorLogin.verificacion, async(req, res) => {
        let usr = req.params
        let data = req.body
        try {
            await miperfil.altaHabilidadUser(data, usr)
            res.json('ok');
        } catch (error) {
            console.log('oh no, algo salio mal!');
        }
    })

    //rutas para entornos profesionales

    app.get('/userown/:id/entorno', async(req, res) => {
        try {
            let resultado = await miperfil.obtenerTablas()
            res.render("entornos", {
                data: resultado
            })

        } catch (error) {
            console.log(err)
            res.estatus(400).json('No se pudo abrir la pagina')
        }
    })

    app.post('/userown/:id/entorno', controladorLogin.verificacion, async(req, res) => {
        let usr = req.params
        let data = req.body
        try {
            await miperfil.altaEntornoUser(data, usr)
            res.json('ok');
        } catch (error) {
            console.log('oh no, algo salio mal!');
        }
    })


}
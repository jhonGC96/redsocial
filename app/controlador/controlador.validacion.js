//Importación de recursos
const Joi = require('joi')

//Importacion de nuestras verificaciones
const { Registro } = require('../modelo/modelo.validacion')
const { Perfil } = require('../modelo/modelo.validacion')

module.exports.checkUser = async(req, res, next) => {
    try {
        await Joi.attempt(req.body, Registro, 'Los datos son incorrectos, intentalo de nuevo')
        return next()
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

//Funcion para chequear los productos
module.exports.checkPerfil = async(req, res, next) => {
    try {
        await Joi.attempt(req.body, Perfil, 'Los datos son incorrectos, intentalo de nuevo')
        return next()
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}
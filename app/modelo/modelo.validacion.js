//Importación de nuestros recursos
const Joi = require('joi')

//Exportamos nuestro schema

module.exports = {
    //validacion de registro de usuario
    Registro: Joi.object().keys({
        nombre: Joi.string().min(3).max(30).required(),
        apellido: Joi.string().min(3).max(40).required(),
        email: Joi.string().email().required(),
        edad: Joi.number().integer().min(15).max(90).required(),
        pass: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        repeat_password: Joi.ref('pass'),
        pais: Joi.number().integer().min(1).max(3).required(),
        tipousr: Joi.number().integer().min(1).max(2).required(),
        perfillinkedin: Joi.string().empty(''),
        hobbies: Joi.string().empty(''),
    }).with('username_usuario', 'pass_usuario'),

    //validacion de registro de tecnologias
    Perfil: Joi.object().keys({
        id: Joi.number().integer().min(1).max(6).required(),
        nombre: Joi.string().required(),
        beforetecla: Joi.number().integer().min(1).max(10).required(),
        aftertecla: Joi.number().integer().min(1).max(10).required(),
        puntaje: Joi.number().integer().min(1).max(5)
    }),
}
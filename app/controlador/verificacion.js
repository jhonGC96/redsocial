//Importación de nuestros recursos
const Joi = require('joi')

//Exportamos nuestro schema

module.exports = {
    //uso de objetos
    Login: Joi.object().keys({
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
    //Uso de objetos
    Producto: Joi.object().keys({
        descricion_prod: Joi.string().min(5).max(50).required(),
        precio_prod: Joi.number().required(),
        imagen_prod: Joi.string(),
        cantidad_inventario_prod: Joi.number(),
    }),
}
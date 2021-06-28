const login = require('../modelo/modelo.login')
const jwt = require('jsonwebtoken')

module.exports.verificacion = async(req, res, next) => {
    let token = req.headers['authorization']
    if (token != undefined) {
        let tokenchk = token.split(' ')[1]
        let resultado = jwt.verify(tokenchk, process.env.SECRET_KEY)
        if (resultado) {
            return next()
        } else {
            throw new Error('Token no valido')
        }
    } else {
        res.status(400).json('Este sistema es privado y seguro, necesita un Token para ingresar')
    }
}

module.exports.chequearUsuario = async(usr) => {
    let usrchk = usr
    let resultado = await login.existenciaDeUsuario(usrchk)
    if (resultado) {
        let res = await login.autenticarPass(usrchk)
        return res;
    } else {
        throw new Error('El correo que ingreso es incorrecto o no esta registrado')

    }

}


module.exports.generaToken = async(data) => {
    try {
        let resultado = jwt.sign({
            data
        }, process.env.SECRET_KEY, {
            expiresIn: '1d'
        })
        return resultado
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

module.exports.datosUsuario = async(usr) => {
    let usrchk = usr
    let resultado = await login.recuperarInfoUser(usrchk)
    if (resultado) {
        return resultado
    } else {
        throw new Error('Contrasena incorrecta')
    }

}
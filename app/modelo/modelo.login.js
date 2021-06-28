const sequelize = require('../../db/db.conexion')

module.exports = class Datos {
    constructor(datos) {
        this.datos = datos
    }

    static async existenciaDeUsuario(data) {
        let usuarioUpdate = [
            data.email,
        ]
        let resultado = await sequelize.query(`SELECT * FROM Usuario WHERE email_usr = ?`, { replacements: usuarioUpdate, type: sequelize.QueryTypes.SELECT })
        if (resultado[0] === undefined) {
            return false
        } else {
            return true
        }
    }

    static async recuperarInfoUser(data) {
        let usuarioUpdate = [
            data.email,
            data.pass
        ]
        let resultado = await sequelize.query(`SELECT * FROM Usuario WHERE email_usr = ? AND contrasena = ?`, { replacements: usuarioUpdate, type: sequelize.QueryTypes.SELECT })
        if (resultado[0] === undefined) {
            return false
        } else {
            return resultado[0]
        }

    }


    static async autenticarPass(usr) {
        //chequear con la base de datos que exista el usuario y pass
        let usuarioUpdate = [
            usr.email,
            usr.pass
        ]

        let resultado = await sequelize.query(`SELECT * FROM Usuario WHERE email_usr = ? AND contrasena = ?`, { replacements: usuarioUpdate, type: sequelize.QueryTypes.SELECT })
        if (resultado[0] === undefined) {
            return false
        } else {
            return true
        }

    }

}
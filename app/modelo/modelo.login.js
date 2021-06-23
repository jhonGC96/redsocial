const sequelize = require('../../db/db.conexion')

module.exports = class Datos {
    constructor(datos) {
        this.datos = datos
    }

    static async existenciaDeUsuario(data) {
        let usuarioUpdate = [
            data.email,
            data.pass
        ]

        try {
            let resultado = await sequelize.query(`SELECT * FROM Usuario WHERE email_usr = ? AND contrasena = ?`, { replacements: usuarioUpdate, type: sequelize.QueryTypes.SELECT })
            if (resultado[0] === undefined) {
                return false
            } else {
                return true
            }
        } catch (error) {
            throw new Error('Ocurrio un error')
        }
    }

    static async recuperarInfoUser(data) {
        let usuarioUpdate = [
            data.email,
            data.pass
        ]

        try {
            let resultado = await sequelize.query(`SELECT * FROM Usuario WHERE email_usr = ? AND contrasena = ?`, { replacements: usuarioUpdate, type: sequelize.QueryTypes.SELECT })
            if (resultado[0] === undefined) {
                return false
            } else {
                return resultado[0]
            }
        } catch (error) {
            throw new Error('Ocurrio un error')
        }
    }

}
//Importación de conexión
const sequelize = require('../../db/db.conexion')

//Exportacion y creación de clase con funciones
module.exports = class Datos {

    //constructor
    constructor(datos) {
        this.datos = datos
    }

    static async listar(data) {
        let usuarioUpdate = [
            data
        ]
        try {
            let resultado = await sequelize.query(`SELECT * FROM Usuario WHERE id = ?`, { replacements: usuarioUpdate, type: sequelize.QueryTypes.SELECT })
            if (resultado[0] === undefined) {
                return false
            } else {
                return resultado[0]
            }
        } catch (error) {
            throw new Error('Ocurrio un error')
        }
    }

    //funcion para dar de alta
    static async alta(data) {
        //creación de objeto
        let usuarioNuevo = [
                data.nombre,
                data.apellido,
                data.email,
                data.edad,
                data.pass,
                data.pais,
                data.tipousr,
                data.perfillinkedin,
                data.hobbies
            ]
            //Control de erorres
        try {
            //Uso de objetos
            let resultado = await sequelize.query(`INSERT INTO Usuario(nombre_usr, apellido_usr, email_usr, edad_usr, contrasena, id_pais1, id_tipousr1, perfillinkedin, hobbies) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, { replacements: usuarioNuevo, type: sequelize.QueryTypes.SELECT })
            return resultado
        } catch (e) {
            console.log(e);
            throw new Error('Ocurrio un error al realizar la alta')
        }
    }

    //funcion para eliminar
    static async eliminar(usuario) {
        //creación de objeto
        let usuarioBaja = [
                usuario
            ]
            //Control de erorres
        try {
            //Uso de objetos
            let resultado = await sequelize.query(`DELETE FROM usuarios WHERE id_usuario = ? `, { replacements: usuarioBaja, type: sequelize.QueryTypes.SELECT })

            return resultado
        } catch (e) {
            console.log(e);
            throw new Error('Ocurrio un error al realizar la baja')
        }
    }




    static async modificar(data) {

        let usuarioUpdate = [
                data
            ]
            //Control de errores
        try {
            //Uso de objetos
            let resultado = await sequelize.query(`SELECT * FROM usuarios WHERE id_usuario = ? `, { replacements: usuarioUpdate, type: sequelize.QueryTypes.SELECT })
            return resultado;
        } catch (error) {
            throw new Error('Ocurrio un error')
        }
    }


    // static async modificarSave(data, id) {
    //     let usuarioUpdate = [
    //         data.nombres_usuario,
    //         data.apellidos_usuario,
    //         data.email_usuario,
    //         data.username_usuario,
    //         data.id_tipousr,
    //         id
    //     ]
    //     try {
    //         let resultado = await sequelize.query(`UPDATE usuarios SET nombres_usuario= ?, apellidos_usuario= ?, email_usuario= ?, username_usuario= ?, id_tipousr= ? WHERE id_usuario= ? `, { replacements: usuarioUpdate, type: sequelize.QueryTypes.SELECT })
    //         return resultado;
    //     } catch (error) {}
    // }

    static async existenciaDeUsuario(data) {
        let usuarioUpdate = [
            data.email
        ]
        try {
            let resultado = await sequelize.query(`SELECT * FROM Usuario WHERE email_usr = ?`, { replacements: usuarioUpdate, type: sequelize.QueryTypes.SELECT })
            if (resultado[0] === undefined) {
                return false
            } else {
                return true
            }
        } catch (error) {
            throw new Error('Ocurrio un error al hacer la peticion a la BD')
        }
    }

    static async autenticarPass(data) {
        let usuarioUpdate = [
            data.email,
            data.pass
        ]
        try {
            let resultado = await sequelize.query(`SELECT * FROM Usuario WHERE email_usr =? AND contrasena =?`, { replacements: usuarioUpdate, type: sequelize.QueryTypes.SELECT })
            if (resultado[0] === undefined) {
                return false
            } else {
                return true
            }
        } catch (error) {
            throw new Error('Ocurrio un error al hacer la peticion a la BD')
        }
    }

}
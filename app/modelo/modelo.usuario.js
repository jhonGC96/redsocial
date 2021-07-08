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

    static async consultartablas(user) {
        let usuarioNuevo = [
            user
        ]
        try {

            let tecnologias = await sequelize.query(`SELECT *from developer_tecno WHERE id_usr2 = ?`, { replacements: usuarioNuevo, type: sequelize.QueryTypes.SELECT })
            let conocimientos = await sequelize.query(`SELECT *from Usuario_conocimiento WHERE id_usr3 = ?`, { replacements: usuarioNuevo, type: sequelize.QueryTypes.SELECT })
            let desempeno = await sequelize.query(`SELECT *from Usuario_desempeno WHERE id_usr4 = ?`, { replacements: usuarioNuevo, type: sequelize.QueryTypes.SELECT })
            let habilidad = await sequelize.query(`SELECT *from Usuario_habilidad WHERE id_usr5 = ?`, { replacements: usuarioNuevo, type: sequelize.QueryTypes.SELECT })
            let entorno = await sequelize.query(`SELECT *from Usuario_entorno WHERE id_usr6 = ?`, { replacements: usuarioNuevo, type: sequelize.QueryTypes.SELECT })
            let tablas = {
                'tecno': tecnologias,
                'cono': conocimientos,
                'desempeno': desempeno,
                'habil': habilidad,
                'entor': entorno
            }
            return tablas;
        } catch (error) {

        }
    }


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
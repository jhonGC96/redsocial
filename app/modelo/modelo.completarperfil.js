//Importación de conexión
const sequelize = require('../../db/db.conexion')

//Exportacion y creación de clase con funciones
module.exports = class Datos {

    //constructor
    constructor(datos) {
        this.datos = datos
    }

    //funcion para dar de alta foto
    static async altaImagen(data) {
        //creación de objeto
        let fotoNueva = [
            data.filename,
            data.descripcion,
            data.id_user.id,
        ]
        try {
            let resultado = await sequelize.query(`INSERT INTO Foto_perfil (filename1, descripcion_foto, id_usr7) VALUES (?,?,?)`, { replacements: fotoNueva, type: sequelize.QueryTypes.SELECT })
            return resultado
        } catch (e) {
            console.log(e);
            throw new Error('Ocurrio un error al realizar la alta')
        }
    }

    //obtener la foto
    static async obtenerFoto(user) {
        let usuario = [
            user.id
        ]
        try {
            let resultado = await sequelize.query(`select *from Foto_perfil WHERE id_usr7 = ? ORDER BY id_foto DESC
            `, { replacements: usuario, type: sequelize.QueryTypes.SELECT })
            return resultado[0];
        } catch (error) {
            throw new Error('Error en la peticion a la bd')
        }
    }


    //funcion para dar de alta tecnologias del usuario
    static async altaTecnologiaUser(data, usr) {
        let usuarioNuevo = [
                usr.id,
                data.id_tecno,
                data.beforetecla,
                data.aftertecla,

            ]
            //Control de erorres
        try {
            //Uso de objetos
            let resultado = await sequelize.query(`INSERT INTO developer_tecno (id_usr2, id_tecnologia1, beforetecla, aftertecla) VALUES (?,?,?,?)`, { replacements: usuarioNuevo, type: sequelize.QueryTypes.SELECT })
            return resultado
        } catch (e) {
            console.log(e);
            throw new Error('Ocurrio un error al realizar la alta')
        }
    }

    //funcion para obtener los conocimientos

    static async consultarConocimientos() {
        try {
            let resultado = await sequelize.query(`SELECT *FROM Conocimiento`)
            return resultado[0];
        } catch (error) {
            console.log(error);
        }
    }

    //funcion para obtener los conocimientos


    static async altaConocimientoUser(data, usr) {
        let usuarioNuevo = [
                usr.id,
                data.id,
                data.beforetecla,
                data.aftertecla,

            ]
            //Control de erorres
        try {
            //Uso de objetos
            let resultado = await sequelize.query(`INSERT INTO Usuario_conocimiento (id_usr3, id_conocimiento1, beforeconocimiento, afterconocimiento) VALUES (?,?,?,?)`, { replacements: usuarioNuevo, type: sequelize.QueryTypes.SELECT })
            return resultado
        } catch (e) {
            console.log(e);
            throw new Error('Ocurrio un error al realizar la alta')
        }
    }

    //funcion para obtener las tablas del perfil
    static async consultartablas() {
        try {

            let habilidad = await sequelize.query(`SELECT *FROM Habilidad_blanda`)
            let entorno = await sequelize.query(`SELECT *FROM Entorno_profesional`)
            let tablas = {
                'habil': habilidad[0],
                'entor': entorno[0]
            }
            return tablas;
        } catch (error) {

        }
    }

    static async consultartabladesempeno() {
        try {
            let resultado = await sequelize.query(`SELECT *FROM Desempeno`)
            return resultado[0];
        } catch (error) {

        }
    }

    static async altaDesempenoUser(data, usr) {
        let usuarioNuevo = [
                usr.id,
                data.id,
                data.beforetecla,
                data.aftertecla,

            ]
            //Control de erorres
        try {
            //Uso de objetos
            let resultado = await sequelize.query(`INSERT INTO Usuario_desempeno (id_usr4, id_desempeno1, beforedesempeno, afterdesempeno) VALUES (?,?,?,?)`, { replacements: usuarioNuevo, type: sequelize.QueryTypes.SELECT })
            return resultado
        } catch (e) {
            console.log(e);
            throw new Error('Ocurrio un error al realizar la alta')
        }
    }

    static async altaHabilidadUser(data, usr) {
        let usuarioNuevo = [
                usr.id,
                data.id,
                data.beforetecla,
                data.aftertecla
            ]
            //Control de erorres
        try {
            //Uso de objetos
            let resultado = await sequelize.query(`INSERT INTO Usuario_habilidad (id_usr5, id_habilidad1, beforehabilidad, afterhabilidad) VALUES (?,?,?,?)`, { replacements: usuarioNuevo, type: sequelize.QueryTypes.SELECT })
            return resultado
        } catch (e) {
            console.log(e);
            throw new Error('Ocurrio un error al realizar la alta')
        }
    }

    static async altaEntornoUser(data, usr) {
        let usuarioNuevo = [
                usr.id,
                data.id,
                data.beforetecla,
                data.aftertecla
            ]
            //Control de erorres
        try {
            //Uso de objetos
            let resultado = await sequelize.query(`INSERT INTO Usuario_entorno (id_usr6, id_entorno1, beforeentorno, afterentorno) VALUES (?,?,?,?)`, { replacements: usuarioNuevo, type: sequelize.QueryTypes.SELECT })
            return resultado
        } catch (e) {
            console.log(e);
            throw new Error('Ocurrio un error al realizar la alta')
        }
    }

    static async buscarUsuario() {
        try {
            let resultado = await sequelize.query(`select *from Usuario`)
            console.log(resultado[0]);
            return resultado[0];
        } catch (error) {
            throw new Error('Error en la peticion a la bd')
        }
    }


}
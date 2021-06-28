//Importación de conexión
const sequelize = require('../../db/db.conexion')

//Exportacion y creación de clase con funciones
module.exports = class Datos {

    //constructor
    constructor(datos) {
        this.datos = datos
    }

    //funcion para dar de alta foto
    static async alta(data) {
        //creación de objeto
        let usuarioNuevo = [
                data.imgbit,
                data.descripcion,
                data.id_user,
            ]
            //Control de erorres
        try {
            //Uso de objetos
            let resultado = await sequelize.query(`INSERT INTO Foto_perfil (imgbit, descipcion_foto, id_debeloper8) VALUES (?,?,?)`, { replacements: usuarioNuevo, type: sequelize.QueryTypes.SELECT })
            return resultado
        } catch (e) {
            console.log(e);
            throw new Error('Ocurrio un error al realizar la alta')
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


}
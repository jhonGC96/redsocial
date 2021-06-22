//Importación de conexión
const sequelize = require('../../db/db.conexion')

//Exportacion y creación de clase con funciones
module.exports = class Datos {

    //constructor
    constructor(datos) {
        this.datos = datos
    }

    //funcion para dar de alta
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
            let resultado = await sequelize.query(`INSERT INTO Foto_perfil (imgbit, descipcion_foto, id_debeloper8) VALUES (?,?,?)`,
                { replacements: usuarioNuevo, type: sequelize.QueryTypes.SELECT })
            return resultado
        } catch (e) {
            console.log(e);
            throw new Error('Ocurrio un error al realizar la alta')
        }
    }

}
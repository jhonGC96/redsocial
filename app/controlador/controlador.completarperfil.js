const miperfil = require('../modelo/modelo.completarperfil')

//Función para alta de imagen
module.exports.altaImagen = async(data) => {
    //Control de errores
    try {
        //Uso de objetos
        await miperfil.alta(data)
        return 'Alta correcta'
    } catch (e) {
        console.log(e);
        throw new Error('Error al agregar')
    }
}


module.exports.altaTecnoUser = async(data, usr) => {
    //Control de errores
    try {
        //Uso de objetos
        await miperfil.altaTecnologiaUser(data, usr)
        return 'Alta correcta'
    } catch (e) {
        console.log(e);
        throw new Error('Error al agregar')
    }
}
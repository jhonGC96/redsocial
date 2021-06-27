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
        return 'succes'
    } catch (e) {
        console.log(e);
        throw new Error('Error al agregar')
    }
}



module.exports.getTabla = async() => {
    //Control de errores
    try {
        //Uso de objetos
        let tabla = await miperfil.consultarConocimientos()
        return tabla
    } catch (e) {
        console.log(e);
        throw new Error('Error al agregar')
    }
}

module.exports.altaConocimientoUser = async(data, usr) => {
    //Control de errores
    try {
        //Uso de objetos
        await miperfil.altaConocimientoUser(data, usr)
        return 'succes'
    } catch (e) {
        console.log(e);
        throw new Error('Error al agregar')
    }
}

//obtener tabla desempeno
module.exports.obtenerTabladesempeno = async() => {
    try {
        //Uso de objetos
        let tabla = await miperfil.consultartabladesempeno()
        return tabla
    } catch (e) {
        console.log(e);
        throw new Error('Error al agregar')
    }
}

module.exports.altaDesempenoUser = async(data, usr) => {
    //Control de errores
    try {
        //Uso de objetos
        await miperfil.altaDesempenoUser(data, usr)
        return 'succes'
    } catch (e) {
        console.log(e);
        throw new Error('Error al agregar')
    }
}




module.exports.obtenerTablas = async() => {
    //Control de errores
    try {
        //Uso de objetos
        let tabla = await miperfil.consultartablas()
        return tabla;
    } catch (e) {
        console.log(e);
        throw new Error('Error al agregar')
    }
}


module.exports.altaHabilidadUser = async(data, usr) => {
    //Control de errores
    try {
        //Uso de objetos
        await miperfil.altaHabilidadUser(data, usr)
        return 'succes'
    } catch (e) {
        console.log(e);
        throw new Error('Error al agregar')
    }
}

module.exports.altaEntornoUser = async(data, usr) => {
    //Control de errores
    try {
        //Uso de objetos
        await miperfil.altaEntornoUser(data, usr)
        return 'succes'
    } catch (e) {
        console.log(e);
        throw new Error('Error al agregar')
    }
}
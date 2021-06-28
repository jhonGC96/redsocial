const miperfil = require('../modelo/modelo.completarperfil');
const path = require('path');
const fs = require('fs-extra')

class Image {
    constructor(filename, descripcion, id_user) {
        this.filename = filename,
            this.descripcion = descripcion,
            this.id_user = id_user
    }
}
//funciones para subir la imagen
const helper = {}
helper.randomName = () => {
    const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomName = 0;
    for (let i = 0; i < 6; i++) {
        randomName += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return randomName
}
helper.altaImagen = async(data) => {
    try {
        let resultado = await miperfil.altaImagen(data);
        if (resultado) {
            return true
        } else {
            throw new Error('error al dar de alta la foto en la BD')
        }

    } catch (error) {
        console.log(error);
    }
    //Control de errores
    // try {
    //     //Uso de objetos
    //     await miperfil.alta(data)
    //     return 'Alta correcta'
    // } catch (e) {
    //     console.log(e);
    //     throw new Error('Error al agregar')
    // }
}

module.exports = helper;

module.exports.upload = async(req, res, next) => {
    let datos = req.body
    let idusr = req.params
    try {
        const name = helper.randomName();
        const imagePath = req.file.path;
        const extension = path.extname(req.file.originalname).toLowerCase();
        const rutasave = path.resolve(`public/images/perfil/${name}${extension}`);
        const filename = imagePath + extension;
        if (extension === '.png' || extension === '.jpg' || extension === '.jpeg' || extension === '.gif') {
            await fs.move(imagePath, rutasave);
            const foto = new Image(filename, datos.descripcion, idusr);
            let resultado = await helper.altaImagen(foto)
            if (resultado) {
                next()
            } else {
                throw new Error('No se pudo subir la imagen')
            }
        } else {
            await fs.remove(imagePath)
            throw new Error('El tipo de archivo no esta soportado')
        }
    } catch (error) {
        console.log(error);
        res.status(400).json('Error al cargar la foto, suba una imagen valida')
    }
}



//funciones para dar de alta las tecnologias del usuario

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

//funciones para dar de alta los conocimientos del usuario

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
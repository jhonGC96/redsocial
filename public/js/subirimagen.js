let form = document.getElementById('subirImagen');
let imagen = document.getElementById('imagen');
let descripcion = document.getElementById('id_descripcion');
let id_user = document.getElementById('id_user');

class Imagen {
    constructor(imagen, descripcion, id) {

        this.imagenbits = imagen,
            this.descripcion = descripcion,
            this.id_user = ""
    }

}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let data = await Usuarios.recuperaUsuario();
    if (data.token === undefined) {
        console.log('no puedes acceder porque no tienes un token');
    } else {
        let data = await Usuarios.recuperaUsuario();
        try {
            let resultado = await fetch("http://localhost:3000/userown/:" + data.id + "/upload-foto", {
                method: 'post',
                headers: {
                    "Accept": "application/json, text/plain, */*",
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${data.token}`,
                },
                body: JSON.stringify({
                    "imgbit": imagen.value,
                    "descripcion": descripcion.value,
                    "id_user": data.id
                })
            })
        } catch (error) {
            console.log("No tienes permiso para acceder");
        }

    }
})
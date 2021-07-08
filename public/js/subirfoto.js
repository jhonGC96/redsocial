class Imagen {
    static async recuperaUsuario() {
        let resultado = await JSON.parse(localStorage.getItem('dataUsuario'))
        return resultado
    }

    static async obtenerFoto() {
        let user = await Imagen.recuperaUsuario()
        let resultado = await fetch("http://localhost:3000/userown/" + user.id + "/getFoto", {
            method: 'get',
            headers: {
                "Accept": "application/json, text/plain, */*",
                'Content-Type': 'application/json',
            },
        })
        return resultado.json()
    }
}

pintarFoto()


async function pintarFoto() {
    let img = await Imagen.obtenerFoto()
    if (img === 'empty') {} else {
        let foto = document.getElementById('imagen')
        foto.src = `/images/perfil/${img.filename1}`
    }
}
let fotoinvitado = document.getElementById('fotoinvitado')
let id = idusuario
class ImagenInvitado {
    static async recuperaUsuario() {
        let resultado = await JSON.parse(localStorage.getItem('dataUsuario'))
        return resultado
    }

    static async obtenerFoto() {
        let resultado = await fetch("http://localhost:3000/userown/" + id + "/getFoto", {
            method: 'get',
            headers: {
                "Accept": "application/json, text/plain, */*",
                'Content-Type': 'application/json',
            },
        })
        return resultado.json()
    }
}
async function pintarFoto() {
    let img = await ImagenInvitado.obtenerFoto()
    if (img === 'empty') {} else {
        let foto = document.getElementById('imagen')
        foto.src = `/images/perfil/${img.filename1}`
    }
}

function nosubirfoto() {
    fotoinvitado.href = ""
}

nosubirfoto()
pintarFoto()
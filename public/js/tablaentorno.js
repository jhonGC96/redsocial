let table = document.getElementById('tablaAlta')
let fila1 = table.getElementsByTagName('tr')[1].children;
let fila2 = table.getElementsByTagName('tr')[2].children;
let fila3 = table.getElementsByTagName('tr')[3].children;
let fila4 = table.getElementsByTagName('tr')[4].children;
class PerfilUsuario {
    constructor(id, nombre, beforetecla, aftertecla) {
        this.id = id,
            this.nombre = nombre,
            this.beforetecla = beforetecla,
            this.aftertecla = aftertecla
    }

    static async recuperaUsuario() {
        let resultado = await JSON.parse(localStorage.getItem('dataUsuario'))
        return resultado
    }
}
//Manda peticion a la ruta
table.addEventListener('submit', async(event) => {
    event.preventDefault();
    let usuario = await PerfilUsuario.recuperaUsuario();
    let dato1 = new PerfilUsuario(fila1[0].children[0].value, fila1[1].children[0].value, fila1[2].children[0].value, fila1[3].children[0].value);
    let dato2 = new PerfilUsuario(fila2[0].children[0].value, fila1[1].children[0].value, fila1[2].children[0].value, fila1[3].children[0].value);
    let dato3 = new PerfilUsuario(fila3[0].children[0].value, fila1[1].children[0].value, fila1[2].children[0].value, fila1[3].children[0].value);
    let dato4 = new PerfilUsuario(fila4[0].children[0].value, fila1[1].children[0].value, fila1[2].children[0].value, fila1[3].children[0].value);

    let altauser = [
        dato1,
        dato2,
        dato3,
        dato4,
    ]
    if (usuario.token === undefined) {
        console.log('no puedes acceder porque no tienes un token');
    } else {

        altauser.forEach(async(tecnologia) => {
            let resultado = await fetch("http://localhost:3000/userown/" + usuario.id + "/entorno", {
                method: 'POST',
                headers: {
                    "Accept": "application/json, text/plain, *,*",
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${usuario.token}`,
                },
                body: JSON.stringify(tecnologia)
            })
            let res = await resultado.json();
            return res
        })
        swal("Bien hecho!", "Da click para continuar!", "success")
            .then((valor) => {
                location.href = '/userown/' + usuario.id
            });
    }

})
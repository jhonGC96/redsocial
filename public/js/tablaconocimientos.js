let table = document.getElementById('tablaAlta')

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
//Manda el post
table.addEventListener('submit', async(event) => {
    event.preventDefault();
    let row1 = document.getElementById('row1').value
    let row2 = document.getElementById('row2').value
    let row3 = document.getElementById('row3').value
    let row4 = document.getElementById('row4').value
    let row5 = document.getElementById('row5').value
    let row6 = document.getElementById('row6').value
    let row7 = document.getElementById('row7').value
    let row8 = document.getElementById('row8').value
    let row9 = document.getElementById('row9').value
    let row10 = document.getElementById('row10').value
    let row11 = document.getElementById('row11').value
    let row12 = document.getElementById('row12').value
    let row13 = document.getElementById('row13').value
    let row14 = document.getElementById('row14').value
    let row15 = document.getElementById('row15').value
    let row16 = document.getElementById('row16').value
    let row17 = document.getElementById('row17').value
    let row18 = document.getElementById('row18').value
    let row19 = document.getElementById('row19').value
    let row20 = document.getElementById('row20').value
    let usuario = await PerfilUsuario.recuperaUsuario();
    let dato1 = new PerfilUsuario(row1, row2, row3, row4);
    let dato2 = new PerfilUsuario(row5, row6, row7, row8)
    let dato3 = new PerfilUsuario(row9, row10, row11, row12)
    let dato4 = new PerfilUsuario(row13, row14, row15, row16)
    let dato5 = new PerfilUsuario(row17, row18, row19, row20)
    let altauser = [
        dato1,
        dato2,
        dato3,
        dato4,
        dato5,
    ]
    if (usuario.token === undefined) {
        console.log('no puedes acceder porque no tienes un token');
    } else {

        altauser.forEach(async(tecnologia) => {

            await fetch("http://localhost:3000/userown/" + usuario.id + "/conocimientos", {
                method: 'POST',
                headers: {
                    "Accept": "application/json, text/plain, *,*",
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${usuario.token}`,
                },
                body: JSON.stringify(tecnologia)
            })
        })
        location.href = '/userown/' + usuario.id
    }

})
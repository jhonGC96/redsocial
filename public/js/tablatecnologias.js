let table = document.getElementById('tablaTecnologia')




class TecnologiaUsuario {
    constructor(id_tecno, tecnologia, beforetecla, aftertecla) {
        this.id_tecno = id_tecno,
            this.tecnologia = tecnologia,
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
    let row21 = document.getElementById('row21').value
    let row22 = document.getElementById('row22').value
    let row23 = document.getElementById('row23').value
    let row24 = document.getElementById('row24').value
    let usuario = await TecnologiaUsuario.recuperaUsuario();
    let node = new TecnologiaUsuario(row1, row2, row3, row4);
    let frontend = new TecnologiaUsuario(row5, row6, row7, row8)
    let swaggerr = new TecnologiaUsuario(row9, row10, row11, row12)
    let javas = new TecnologiaUsuario(row13, row14, row15, row16)
    let jasonwebtoken = new TecnologiaUsuario(row17, row18, row19, row20)
    let modelovistacontrolador = new TecnologiaUsuario(row21, row22, row23, row24)
    let tecnologiauser = [
        node,
        frontend,
        swaggerr,
        javas,
        jasonwebtoken,
        modelovistacontrolador
    ]
    console.log(tecnologiauser);
    if (usuario.token === undefined) {
        console.log('no puedes acceder porque no tienes un token');
    } else {

        tecnologiauser.forEach(async(tecnologia) => {

            let resultado = await fetch("http://localhost:3000/userown/" + usuario.id + "/tecnologias", {
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
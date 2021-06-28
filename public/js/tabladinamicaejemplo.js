templateTabla = document.getElementsByClassName('table-wrapper col-md-12')
const fragment = document.createDocumentFragment()
titulo = document.getElementById('titulo')
let h2 = document.createElement('h2')
let tabla = document.getElementById('filas')

let tr = document.createElement("tr")
let th = document.createElement("th")
let th1 = document.createElement("th")
let th2 = document.createElement("th")
let th3 = document.createElement("th")
let input = document.createElement('input')
let input1 = document.createElement('input')
let input2 = document.createElement('input')
let input3 = document.createElement('input')
let row = 0

document.addEventListener('DOMContentLoaded', () => {
    pintarTabla()
})

async function obtenerTablas() {
    let resultado = await fetch("http://localhost:3000/obtenerTablas", {
        method: 'get',
        headers: {
            "Accept": "application/json, text/plain, */*",
            'Content-Type': 'application/json',
        },
    })
    let res = await resultado.json();
    let desempeno = res.desemp
    return desempeno
}

async function pintarTabla() {

    let desempeno = await obtenerTablas()
    console.log(desempeno);
    h2.textContent = 'Valora tu desempeno'
    titulo.appendChild(h2);

    for (let index = 0; index < desempeno.length; index++) {
        desempeno.forEach(function(element, arreglo) {

            tr.setAttribute('id', `columna${arreglo}`)
            input.setAttribute('value', element.id_desempeno)
            input.setAttribute('type', 'number')
            input.setAttribute('class', 'form-control')
            input.setAttribute('disabled', '')

            input1.setAttribute('value', element.descripcion_desempeno)
            input1.setAttribute('type', 'text')
            input1.setAttribute('class', 'form-control')
            input1.setAttribute('disabled', '')

            input2.setAttribute('type', 'number')
            input2.setAttribute('min', 1)
            input2.setAttribute('max', 10)
            input2.setAttribute('class', 'form-control')
            input2.setAttribute('required', '')

            input3.setAttribute('type', 'number')
            input3.setAttribute('min', 1)
            input3.setAttribute('max', 10)
            input3.setAttribute('class', 'form-control')
            input3.setAttribute('required', '')

            th.append(input)
            th1.append(input1)
            th2.append(input2)
            th3.append(input3)
            tr.append(th)
            tr.append(th1)
            tr.append(th2)
            tr.append(th3)
            fragment.appendChild(tr)
        });
        tabla.appendChild(fragment)
    }
}
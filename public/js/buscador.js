let busqueda = document.querySelector('#buscar')
let data = JSON.parse(localStorage.getItem('dataUsuario'));
let boton = document.querySelector('#boton')
let fragment = document.createDocumentFragment();
let results = document.getElementById('results')

boton.addEventListener('click', async(e) => {
    e.preventDefault();
    if (busqueda.value === '') {
        swal("Ingresa datos para buscar!");
    } else {
        // location.href(`localhost:3000/userown/${data.id}/search`)
        filtrar()
    }
})


class GetFoto {
    static async obtenerFoto(persona) {
        let resultado = await fetch("http://localhost:3000/userown/" + persona + "/getFoto", {
            method: 'get',
            headers: {
                "Accept": "application/json, text/plain, */*",
                'Content-Type': 'application/json',
            },
        })
        return resultado.json()
    }
}

const filtrar = async() => {
    results.innerHTML = '';
    const texto = busqueda.value.toLowerCase();
    let arrayUsr = await obtenerUsuarios()
    console.log(arrayUsr);
    for (let persona of arrayUsr) {
        let nombre = persona.nombre_usr.toLowerCase() + ' ' + persona.apellido_usr.toLowerCase()
        if (nombre.indexOf(texto) !== -1) {
            const div = document.createElement('div');
            div.setAttribute('class', 'col-sm-4 mt-3');
            div.setAttribute('style', 'width: 18rem;');
            const img = document.createElement('img');
            img.setAttribute('class', 'card-img-top');
            let imgn = await GetFoto.obtenerFoto(persona.id)
            console.log(imgn);
            if (imgn === 'empty') {
                img.setAttribute('src', '/images/perfil/usuario.jpg');
            } else {
                img.setAttribute('src', `/images/perfil/${imgn.filename1}`);
            }
            img.setAttribute('alt', 'Card image cap');
            img.setAttribute('width', '286');
            img.setAttribute('height', '300')
            const titulo = document.createElement('div')
            titulo.setAttribute('class', 'card')
            const h5 = document.createElement('h5');
            h5.setAttribute('class', 'card-title');
            h5.textContent = persona.nombre_usr + ' ' + persona.apellido_usr;
            const a = document.createElement('a')
            a.appendChild(h5)
            const botones = document.createElement('div');
            botones.setAttribute('class', 'card-body');
            const botonaceptar = document.createElement('button');
            botonaceptar.setAttribute('style', 'width: 50px; height:50px; border-radius: 50%')
            const icon = document.createElement('i')
            icon.setAttribute('class', 'fa fa-user-plus fa-lg');
            icon.setAttribute('aria-hidden', 'true')
            botonaceptar.appendChild(icon)
            botones.appendChild(a)
            let myusr = await JSON.parse(localStorage.getItem('dataUsuario'))
            a.setAttribute('href', `/userown/${persona.id}/`)
            if (persona.id !== myusr.id) {
                botones.appendChild(botonaceptar)
                a.setAttribute('href', `/uservisit/${persona.id}/`)
            }
            titulo.appendChild(img)
            titulo.appendChild(botones)
            div.appendChild(titulo)
            fragment.appendChild(div)
            results.appendChild(fragment)
        }
    }
    if (results.innerHTML === '') {
        const h5 = document.createElement('h5')
        h5.textContent = 'No hay resultados'
        results.appendChild(h5)
    }
}


async function obtenerUsuarios() {
    let users = await fetch("http://localhost:3000/getUsers", {
        method: 'get',
        headers: {
            "Accept": "application/json, text/plain, */*",
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.token}`,
        },
    })
    return users.json()
}
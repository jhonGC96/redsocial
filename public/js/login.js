let form = document.getElementById('loginForm');
let email = document.getElementById('email');
let pass = document.getElementById('pass');

class Usuarios {
    constructor(email, pass) {
        this.email = email,
            this.pass = pass,
            this.id = "",
            this.nombre = "",
            this.apellido = "",
            this.edad = "",
            this.tipousr = "",
            this.pais = "",
            this.linkedin = "",
            this.hobbies = "",
            this.token = ""
    }

    static async guardaUsuario(usuario) {
        localStorage.setItem("dataUsuario", JSON.stringify(usuario))
    }

    static async recuperaUsuario() {
        let resultado = await JSON.parse(localStorage.getItem('dataUsuario'))
        return resultado
    }
}
//Manda el post
form.addEventListener('submit', async(event) => {
    event.preventDefault();

    Usuarios.guardaUsuario(new Usuarios(email.value, pass.value));
    let resultado = await fetch("http://localhost:3000/login", {
        method: 'POST',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": email.value,
            "pass": pass.value
        })
    })
    let vuelta = await resultado.json();


    if (vuelta.error) {
        swal({
            title: `${vuelta.error}`,
            icon: "error",
        });
    } else {
        let data = await Usuarios.recuperaUsuario();
        data.id = vuelta.username_usuario.id;
        data.nombre = vuelta.username_usuario.nombre_usr;
        data.apellido = vuelta.username_usuario.apellido_usr;
        data.edad = vuelta.username_usuario.edad_usr;
        data.pais = vuelta.username_usuario.id_pais1;
        data.tipousr = vuelta.username_usuario.id_tipousr1;
        data.linkedin = vuelta.username_usuario.perfillinkedin;
        data.hobbies = vuelta.username_usuario.hobbies;
        data.token = vuelta.token;
        Usuarios.guardaUsuario(data);

        if (data.token === undefined) {
            console.log('no puedes acceder porque no tienes un token');
        } else {
            let data = await Usuarios.recuperaUsuario();
            let resultado = await fetch("http://localhost:3000/hi", {
                method: 'get',
                headers: {
                    "Accept": "application/json, text/plain, */*",
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${data.token}`,
                },
            })
            let res = await resultado.json();
            if (res === 'ok') {
                location.href = '/userown/' + data.id
            } else {
                console.log('no se pudo acceder');
            }
        }
    }
})
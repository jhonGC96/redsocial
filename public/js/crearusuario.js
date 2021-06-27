let formRegistrar = document.getElementById('formRegistrar')
let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')
let correo = document.getElementById('correo')
let edad = document.getElementById('edad')
let password = document.getElementById('password')
let repeat_password = document.getElementById('repeat_password')
let pais = document.getElementById('pais')
let tipousr = document.getElementById('tipouser')
let perfillinkedin = document.getElementById('perfillinkedin')
let hobbies = document.getElementById('hobbies')

class UsuarioNuevo {
    constructor(nombre, apellido, email, edad, pass, repeat_password, pais, tipousr, perfillinkedin, hobbies) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.email = email,
            this.edad = edad,
            this.pass = pass,
            this.repeat_password = repeat_password,
            this.pais = pais,
            this.tipousr = tipousr,
            this.perfillinkedin = perfillinkedin,
            this.hobbies = hobbies
    }

    static async guardaUsuario(usuario) {
        localStorage.setItem("dataUsuario", JSON.stringify(usuario))
    }
}
formRegistrar.addEventListener('submit', async(event) => {
    event.preventDefault();
    //Usuarios.guardaUsuario(new Usuarios(email.value, pass.value));
    let user = new UsuarioNuevo(nombre.value, apellido.value, correo.value, edad.value, password.value, repeat_password.value, pais.value, tipousr.value, perfillinkedin.value, hobbies.value)
    let resultado = await fetch("http://localhost:3000/saveuser", {
        method: 'POST',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    let vuelta = await resultado.json();


    if (vuelta.error) {
        swal({
            title: `${vuelta.error}`,
            icon: "error",
        });
    } else {
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

            ////Aqui se logea al usuario una vez que se registro
        } else {
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
                        location.href = '/userown/' + data.id + '/conocimientos'
                    } else {
                        console.log('no se pudo acceder');
                    }
                }
            }
        }
    }

})
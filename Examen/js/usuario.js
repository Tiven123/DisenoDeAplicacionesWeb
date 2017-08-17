


$(document).ready(function () {
    $('#boton-guardar').click(function () {

        var usuarios = new Array();

        /*Obtener los datos en el LocalStorage*/
        if (localStorage.getItem('Usuarios')) {
            var usuariosN = localStorage.getItem('Usuarios');
            usuarios = JSON.parse(usuariosN);
        }

        /*Obtener datos del formulario*/
        var usuario = new Array(3);
        usuario[0] = document.getElementById("nombre").value;
        usuario[1] = document.getElementById("correo").value;
        usuario[2] = document.getElementById("contrasenna").value;


        /*Guardando los datos en el LocalStorage*/
        var cantidadUsuarios = usuarios.push(usuario);
        localStorage.setItem("Usuarios", JSON.stringify(usuarios));

        /*Limpiando el formulario*/
        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("contrasenna").value = "";

        alert("Usuario Registrado Exitosamente");
    });
});

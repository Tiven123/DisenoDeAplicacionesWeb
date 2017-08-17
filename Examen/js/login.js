$(document).ready(function () {
    $('#boton-login').click(function () {

        var usuarios = new Array();

        /*Obtener los datos en el LocalStorage*/
        if (localStorage.getItem('Usuarios')) {
            var usuariosN = localStorage.getItem('Usuarios');
            usuarios = JSON.parse(usuariosN);
        }

        /*Obtener datos del formulario*/
        var usuario = document.getElementById("usuario").value;
        var contrasena = document.getElementById("contrasenna").value;

        /*Verificar Usuario*/
        for (var i = 0; i < usuarios.length; i++) {
            if ((usuarios[i][1] == usuario) && (usuarios[i][2]) == contrasena) {
                alert("Bienvenido");
                sessionStorage.setItem("Nombre", usuarios[i][0]);
                window.location = "info.html";
            }
        }

        alert("Verifique los datos");
    });
});

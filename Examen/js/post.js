$(document).ready(function () {
    $('#boton-guardar').click(function () {

        alert("Hi");

        var publicaciones = new Array();

        /*Obtener los datos en el LocalStorage*/
        if (localStorage.getItem("Publicaciones")) {
            var publiN = localStorage.getItem("Publicaciones");
            publicaciones = JSON.parse(publiN);
        } else {
            alert("Hola");
        }

        /*Obtener datos del formulario*/
        var post = new Array(2);
        post[0] = document.getElementById("postear").value;
        post[1] = sessionStorage.getItem("Nombre");



        /*Guardando los datos en el LocalStorage*/
        var cantidadPublicaciones = publicaciones.push(post);
        localStorage.setItem("Publicaciones", JSON.stringify(publicaciones));

        /*Limpiando el formulario*/
        document.getElementById("postear").value = "";

        alert("Publicacion exitosa");
    });
});

$(document).ready(function () {

    //Animacion del menu version movil
    let menuClick = "#menuclick";
    let menuDesplegable = "#menu-desplegable";

    $(menuClick).on({
        click: function () {
            $(menuDesplegable).slideToggle("slow");
        }
    })

    $(menuDesplegable).hide();


    //Funcion de clickado en menu version movil:
    $("#menuInicio").on({
        click: function () {
            window.location.href = "./index.html";
        }
    })

    $("#menuNosotros").on({
        click: function () {
            window.location.href = "./index.html#nosotros";
        }
    })

    $("#menuProductos").on({
        click: function () {
            window.location.href = "./index.html";
        }
    })

    $("#menuContactos").on({
        click: function () {
            window.location.href = "./index.html#contacto";
        }
    })



    $('#menu-desplegable ul li').hover(
        function() {
            $(this).css('background-color', 'white'); // Cambiar el color de fondo
            $(this).css('color', '#085A8C'); // Cambiar el color de la letra
        },
        function() {
            $(this).css('background-color', ''); // Restaurar el color de fondo original
            $(this).css('color', ''); // Restaurar el color de la letra original
        }
    );
})
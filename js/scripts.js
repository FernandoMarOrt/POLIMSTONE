$(document).ready(function () {




    let clickCubremuro = "div#contenido>main>div#productos>div#cubremurosD";
    let clickCubrepilares = "div#contenido>main>div#productos>div#cubrepilaresD";
    let clickJambas = "div#contenido>main>div#productos>div#jambasD";
    let clickUmbrales = "div#contenido>main>div#productos>div#umbralesD"; 
    let clickViertaguas = "div#contenido>main>div#productos>div#viertaguasD";
    let clickFrenteforjado = "div#contenido>main>div#productos>div#frenteforjadoD";
    let clickRercercos = "div#contenido>main>div#productos>div#recercosD";

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
    $(".menuInicio").on({
        click: function () {
            window.location.href = "./index.html";
        }
    })

    $(".menuNosotros").on({
        click: function () {
            window.location.href = "./index.html#nosotros";
        }
    })

    $(".menuProductos").on({
        click: function () {
            window.location.href =  "./index.html#productos";
        }
    })

    $(".menuContactos").on({
        click: function () {
            window.location.href = "./index.html#contacto";
        }
    })




    $('#menu-desplegable ul li').hover(
        function() {
            $(this).css('background-color', '#0684d3'); // Cambiar el color de fondo
        },
        function() {
            $(this).css('background-color', ''); // Restaurar el color de fondo original
        }
    );

    
    $('#menuEscritorio li').hover(
        function() {
            $(this).css('color', '#0684d3'); // Cambiar el color de fondo
        },
        function() {
            $(this).css('color', ''); // Restaurar el color de fondo original
        }
    );


    $(clickCubremuro).on({
        click: function () {

            $("#cubremuros").fadeOut();

            if ($("#cubremuros").css("display") === "none") {
                $("#cubremuros").fadeIn();
                $("#flechaCubre").css({ transform: 'rotate(180deg)', transition: 'transform 0.5s ease' });
            } else {
                $("#flechaCubre").css({ transform: 'rotate(0deg)', transition: 'transform 0.5s ease' });
                
            }
        }


    });


    $(clickCubrepilares).on({
        click: function () {

            $("#cubrepilares").fadeOut();

            if ($("#cubrepilares").css("display") === "none") {
                $("#cubrepilares").fadeIn();
                $("#flechaCubre2").css({ transform: 'rotate(180deg)', transition: 'transform 0.5s ease' });
            } else {
                $("#flechaCubre2").css({ transform: 'rotate(0deg)', transition: 'transform 0.5s ease' });
            }
        }


    });


    $(clickJambas).on({
        click: function () {

            $("#jambas").fadeOut();

            if ($("#jambas").css("display") === "none") {
                $("#jambas").fadeIn();
                $("#flechaJambas").css({ transform: 'rotate(180deg)', transition: 'transform 0.5s ease' });
            } else {
                $("#flechaJambas").css({ transform: 'rotate(0deg)', transition: 'transform 0.5s ease' });
            }
        }


    });




    $(clickUmbrales).on({
        click: function () {

            $("#umbrales").fadeOut();

            if ($("#umbrales").css("display") === "none") {
                $("#umbrales").fadeIn();
                $("#flechaUmbrales").css({ transform: 'rotate(180deg)', transition: 'transform 0.5s ease' });
            } else {
                $("#flechaUmbrales").css({ transform: 'rotate(0deg)', transition: 'transform 0.5s ease' });
            }
        }


    });



    $(clickViertaguas).on({
        click: function () {

            $("#viertaguas").fadeOut();

            if ($("#viertaguas").css("display") === "none") {
                $("#viertaguas").fadeIn();
                $("#flechaViertaguas").css({ transform: 'rotate(180deg)', transition: 'transform 0.5s ease' });
            } else {
                $("#flechaViertaguas").css({ transform: 'rotate(0deg)', transition: 'transform 0.5s ease' });
            }
        }


    });




    $(clickFrenteforjado).on({
        click: function () {

            $("#frenteforjado").fadeOut();

            if ($("#frenteforjado").css("display") === "none") {
                $("#frenteforjado").fadeIn();
                $("#flechaForjado").css({ transform: 'rotate(180deg)', transition: 'transform 0.5s ease' });
            } else {
                $("#flechaForjado").css({ transform: 'rotate(0deg)', transition: 'transform 0.5s ease' });
            }
        }


    });


    

    $(clickRercercos).on({
        click: function () {

            $("#recercos").fadeOut();

            if ($("#recercos").css("display") === "none") {
                $("#recercos").fadeIn();
                $("#flechaRecercos").css({ transform: 'rotate(180deg)', transition: 'transform 0.5s ease' });
            } else {
                $("#flechaRecercos").css({ transform: 'rotate(0deg)', transition: 'transform 0.5s ease' });
            }
        }


    });

   
    $("#cubrepilares").hide();
    $("#jambas").hide();
    $("#umbrales").hide();
    $("#viertaguas").hide();
    $("#frenteforjado").hide();
    $("#recercos").hide();




})



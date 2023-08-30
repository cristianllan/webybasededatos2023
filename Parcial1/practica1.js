$(document).ready(function () {
    //alert("Funciona jquery")
    $("#boton1").on("click", function(){
        $("#texto1").html("PEPE")
    });

    $("#texto1").hover(function () {
        $(this).css("background-color", "red");
        $(this).css("font-size", "50px");
    }, function () {
        $(this).css("background-color", "white");
        $(this).css("font-size", "20px");
    }

    );
    $("#boton2").click(function (e) {
        $("#imagen1").fadeToggle("slow");
    });
});
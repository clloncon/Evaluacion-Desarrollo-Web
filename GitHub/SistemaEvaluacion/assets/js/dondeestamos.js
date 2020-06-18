$(function() {
    $("#dialog2").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000,
        },
    });
});

$("#boton").click(function() {
    $("#dialog2").dialog("open");
});
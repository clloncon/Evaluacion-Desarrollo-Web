 var usuario = localStorage["user"];

 $(document).ready(function() {
     if (usuario == "") {
         $("#usuario").html("Log-in")
     } else {
         $("#usuario").html("log-out: " + usuario)
     }
 });

 $("#usuario").click(function() {
     if ($("#usuario").html() == "Log-in") {
         //  $("#usuario").html("Log-in")
         window.open("loggin.html", "_self")
     } else {
         localStorage["user"] = "";
         $("#dialog1").dialog("open");
         //  window.open("index.html", "_self")
         //  $("#usuario").html("Log-in")
     }
 });


 $(function() {
     $("#dialog1").dialog({
         autoOpen: false,
         show: {
             effect: "blind",
             duration: 1000,
         },
         close: function(event, ui) { window.open("index.html", "_self"); }

     });
 });
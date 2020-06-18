function opengrafico(evt, cityName) {

    var i, tabcontent, tablinks;
  

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  /* -------------------------------------graficos------------------------------------------------------- */
  var datos = [
    { ciudad: 'Arica', ultimasHoras: 0, totalFecha: 6.2, normalFecha: 1.6, pasadoFecha: 0.0, deficitSuperavit: 100, normal: 1.6 },
    { ciudad: 'Iquique', ultimasHoras: 0, totalFecha: 4.4, normalFecha: 0.9, pasadoFecha: 0.0, deficitSuperavit: 100, normal: 1.0 },
    { ciudad: 'Jalama', ultimasHoras: 0, totalFecha: 18.6, normalFecha: 5.9, pasadoFecha: 3.0, deficitSuperavit: 100, normal: 5.9 },
    { ciudad: 'Antofapasta', ultimasHoras: 0, totalFecha: 0.4, normalFecha: 2.4, pasadoFecha: 2.6, deficitSuperavit: -83, normal: 2.5 },
    { ciudad: 'Caldera', ultimasHoras: 0, totalFecha: 0.8, normalFecha: 0, pasadoFecha: 0.6, deficitSuperavit: 0, normal: 0 },
    { ciudad: 'La Serena', ultimasHoras: 0, totalFecha: 12.2, normalFecha: 86.5, pasadoFecha: 45.2, deficitSuperavit: -86, normal: 86.7 },
    { ciudad: 'Valparaíso', ultimasHoras: 0, totalFecha: 83.2, normalFecha: 412.2, pasadoFecha: 226.3, deficitSuperavit: -80, normal: 413.1 },
    { ciudad: 'Rodelillo', ultimasHoras: 0, totalFecha: 117.4, normalFecha: 0, pasadoFecha: 257.1, deficitSuperavit: 0, normal: 0 },
    { ciudad: 'Pudahuel', ultimasHoras: 0, totalFecha: 47.2, normalFecha: 275.8, pasadoFecha: 117.2, deficitSuperavit: -83, normal: 276.9 },
    { ciudad: 'Santiago', ultimasHoras: 0, totalFecha: 82.0, normalFecha: 340.6, pasadoFecha: 151.4, deficitSuperavit: -76, normal: 341.8 },
    { ciudad: 'Tobalaba', ultimasHoras: 0, totalFecha: 99.4, normalFecha: 365.0, pasadoFecha: 188.7, deficitSuperavit: -73, normal: 367.8 },
    { ciudad: 'Juan Fernández', ultimasHoras: 0, totalFecha: 679.7, normalFecha: 1028.7, pasadoFecha: 1040.6, deficitSuperavit: -34, normal: 1048.1 },
    { ciudad: 'Curicó', ultimasHoras: 0, totalFecha: 162.4, normalFecha: 654.2, pasadoFecha: 414.0, deficitSuperavit: -75, normal: 658.0 },
    { ciudad: 'Chillán', ultimasHoras: 0, totalFecha: 626.8, normalFecha: 1046.4, pasadoFecha: 759.1, deficitSuperavit: -40, normal: 1058.8 },
    { ciudad: 'Concepcion', ultimasHoras: 0, totalFecha: 715.6, normalFecha: 1072.6, pasadoFecha: 772.9, deficitSuperavit: -33, normal: 1090.6 },
    { ciudad: 'Temuco', ultimasHoras: 0, totalFecha: 787.5, normalFecha: 1117.5, pasadoFecha: 1056.9, deficitSuperavit: 30, normal: 1150.5 },
    { ciudad: 'Valdivia', ultimasHoras: 0, totalFecha: 1052.9, normalFecha: 1705.8, pasadoFecha: 1538.6, deficitSuperavit: 38, normal: 1754.1 },
    { ciudad: 'Osorno', ultimasHoras: 0, totalFecha: 833.8, normalFecha: 1203.8, pasadoFecha: 1258.4, deficitSuperavit: 31, normal: 1247.5 },
    { ciudad: 'Puerto Montt', ultimasHoras: 0, totalFecha: 1073.2, normalFecha: 1539.9, pasadoFecha: 1375.0, deficitSuperavit: 30, normal: 1615.4 },
    { ciudad: 'Coyhaique', ultimasHoras: 0, totalFecha: 732.6, normalFecha: 942.2, pasadoFecha: 916.2, deficitSuperavit: 22, normal: 993.3 },
    { ciudad: 'Balmaceda', ultimasHoras: 0, totalFecha: 0, normalFecha: 515.5, pasadoFecha: 435.4, deficitSuperavit: 0, normal: 541.6 },
    { ciudad: 'Punta Arenas', ultimasHoras: 0.4, totalFecha: 311.4, normalFecha: 383.1, pasadoFecha: 340.6, deficitSuperavit: 19, normal: 1.6 }
];


var ctx = document.getElementById("graficoBarras").getContext("2d"); 
var graficoBarras = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:['Arica', 'Iquique' , 'Calama', 'Antofagasta', 'Caldera','Serana', 'Valparaiso', 'Santiago', 'Chillan'],
        datasets:[{ 
            label:'num datos',
            data:[ 6.2,4.4,18.6,42,23,34,26,46,364],
            backgroundColor: [
                'rgb(66,12,123)',
                'rgb(66,233,133)',
                'rgb(66,40,143)',
                'rgb(156,130,143)',
                'rgb(146,40,143)',
                'rgb(16,50,143)',
                'rgb(66,60,143)',
                'rgb(126,70,143)',
                'rgb(76,80,143)',
            ]
        }]
    }
});
var ctx = document.getElementById("graficoLineas").getContext("2d"); 
var graficoBarras = new Chart(ctx, {
    type: 'line',
    data: {
        labels:['Arica', 'Iquique' , 'Calama', 'Antofagasta', 'Caldera','Serana', 'Valparaiso', 'Santiago', 'Chillan'],
        datasets:[{ 
            label:'2019',
            data:[ 6.2,4.4,18.6,42,23,34,26,46,364],
            backgroundColor: [
                'rgb(66,123,123)',
                'rgb(66,23,133)',
                'rgb(66,140,143)',
                'rgb(56,140,143)',
                'rgb(46,32,143)',
                'rgb(36,67,143)',
                'rgb(66,32,143)',
                'rgb(66,76,23)',
                'rgb(76,30,43)',
            ]
            
        }, {
            label:'2018',
            data:[ 8.2,5.4,28.6,32,33,44,36,66,464],
            backgroundColor: [
                'rgb(66,12,123)',
                'rgb(66,233,133)',
                'rgb(66,40,143)',
                'rgb(56,30,143)',
                'rgb(46,40,143)',
                'rgb(36,50,143)',
                'rgb(66,60,143)',
                'rgb(66,70,143)',
                'rgb(76,80,143)',
            ]
                          
        }]
        
        
       

    }
});

var ctx = document.getElementById("graficoTorta").getContext("2d"); 
var graficoBarras = new Chart(ctx, {
    type: 'pie',
    data: {
        labels:['Arica', 'Iquique' , 'Calama', 'Antofagasta', 'Caldera','Serana', 'Valparaiso', 'Santiago', 'Chillan'],
        datasets:[{ 
            label:'num datos',
            data:[ 6.2,4.4,18.6,42,23,34,26,46,364],
            backgroundColor: [
                'rgb(66,12,123)',
                'rgb(66,233,133)',
                'rgb(66,40,143)',
                'rgb(156,130,143)',
                'rgb(146,40,143)',
                'rgb(16,50,143)',
                'rgb(66,60,143)',
                'rgb(126,70,143)',
                'rgb(76,80,143)',
            ]
        }]
    }
});
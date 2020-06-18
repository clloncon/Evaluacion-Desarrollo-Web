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
 

var ctx = document.getElementById("graficoBarras").getContext("2d"); 
var graficoBarras = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:['Oscar', 'Brian' , 'Maria', 'Nayareth', 'Juan','Pedro', 'Arturo', 'Santiago', 'Fernadno'],
        datasets:[{ 
            label:'Datos Profesor',
            data:[ 3.2,4.4,2.6,3.6,5,4.2,2.3,4.4,4.4],
            backgroundColor: [
                'rgb(166,12,123)',
                'rgb(126,233,133)',
                'rgb(1,40,143)',
                'rgb(12,10,14)',
                'rgb(30,1,43)',
                'rgb(49,0,143)',
                'rgb(66,70,40)',
                'rgb(50,20,50   )',
                'rgb(76,80,143)',
            ]
        }]
    }
});
var ctx = document.getElementById("graficoLineas").getContext("2d"); 
var graficoBarras = new Chart(ctx, {
    type: 'line',
    data: {
        labels:['Oscar', 'Brian' , 'Maria', 'Nayareth', 'Juan','Pedro', 'Arturo', 'Santiago', 'Fernadno'],
        datasets:[{ 
            label:'2019',
            data:[ 2.2,1.4,3,4,5,2,3.2,3],
            backgroundColor: [
                'rgb(255, 99, 132, 0.2)',
                'rgb(66,23,133,0.1)',
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
            data:[ 3.2,4.4,2.6,3.6,5,4.2,2.3,4.4,4.4],
            backgroundColor: [
                'rgb(255, 200, 21, 0.2)',
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
    type: 'radar',
    data: {
        labels:['Popularidad', 'Enseñanza' , 'Material Complementario', 'Analisis de casos', 'Amabilidad','Manejo del tema', 'Extras', 'Se entiende', 'Malos habitos'],
        datasets:[{ 
            label:'Brian',
            data:[ 3.2,4.4,2.6,3.6,5,4.2,2.3,4.4,4.4],
            backgroundColor: [
                'rgb(0, 200, 132, 0.9)',
                'rgb(10,20,133)',
                'rgb(10,40,143)',
                'rgb(20,130,143)',
                'rgb(50,40,143)',
                'rgb(90,50,143)',
                'rgb(120,60,143)',
                'rgb(150,70,143)',
                'rgb(200,8|0,143)',
            ]
        }]
        
    }
});
var dispositivos = document.getElementById('pDispositivos');
var tipoDispositivos = [
    'Mobile',
    'Desktop',

];

var pantallas = document.getElementById('pPantallas');
var cantPantallas = [
    '1 pantalla',
    '2 pantallas',
    '3 pantallas'
];

var benchmark = document.getElementById('pBenchmark');
var cantBenchmark = [
    'Relevar 1 propuesta',
    'Relevar 2 propuestas',
    'Relevar 3 propuestas'
];

function setChallenge () {    

    var i = (Math.random() * tipoDispositivos.length) | 0;
    pDispositivos.innerText = tipoDispositivos[i];

    var i2 = (Math.random() * cantPantallas.length) | 0;  
    pPantallas.innerText = cantPantallas[i2];
    
    var i3 = (Math.random() * cantBenchmark.length) | 0;  
    pBenchmark.innerText = cantBenchmark[i3];
}

function invisible () {
    document.getElementById("randomElements").style.display = "";
}

setChallenge();
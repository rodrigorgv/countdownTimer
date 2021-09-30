var dias = 1000 * 60 * 60 * 24 * 14;
var calcular = new Date().getTime()+dias;


var x = setInterval(function(){
    var nowDate = new Date().getTime();

    var distance = calcular-nowDate ;


    var days = Math.floor(distance/(1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerText = hours;
    document.getElementById("minute").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;


},1000);
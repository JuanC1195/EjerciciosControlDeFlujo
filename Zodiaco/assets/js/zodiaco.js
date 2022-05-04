var dia = prompt("Ingresa el día de tu nacimiento:");
var mes = prompt("Ingresa el mes de tu nacimiento en letra: ");

mes = mes.toLowerCase();
console.log(mes);

if ((dia>=1)&&(dia<=31)){
    if (((mes == "diciembre")&&((dia>=22)&&(dia<=31)))||((mes ==  "enero")&&((dia>=1)&&(dia<=20)))){
        console.log("Tu signo zodiacal es Capricornio");
    } else if (((mes == "enero")&&((dia>=21)&&(dia<=31)))||((mes == "febrero")&&((dia>=1)&&(dia<=18)))) {
        console.log("Tu signo zodiacal es Acuario");
    } else if (((mes == "febrero")&&((dia>=19)&&(dia<=28)))||((mes == "marzo")&&((dia>=1)&&(dia<=20)))) {
        console.log("Tu signo zodiacal es Piscis");
    } else if (((mes == "marzo")&&((dia>=21)&&(dia<=31)))||((mes == "abril")&&((dia>=1)&&(dia<=20)))) {
        console.log("Tu signo zodiacal es Aries");
    } else if (((mes == "abril")&&((dia>=21)&&(dia<=30)))||((mes == "mayo")&&((dia>=1)&&(dia<=21)))) {
        console.log("Tu signo zodiacal es Tauro");
    } else if (((mes == "mayo")&&((dia>=22)&&(dia<=31)))||((mes == "junio")&&((dia>=1)&&(dia<=21)))) {
        console.log("Tu signo zodiacal es Geminis");
    } else if (((mes == "junio")&&((dia>=22)&&(dia<=30)))||((mes == "julio")&&((dia>=1)&&(dia<=22)))) {
        console.log("Tu signo zodiacal es Cancer");
    } else if (((mes == "julio")&&((dia>=23)&&(dia<=31)))||((mes == "agosto")&&((dia>=1)&&(dia<=23)))) {
        console.log("Tu signo zodiacal es Leo");
    } else if (((mes == "agosto")&&((dia>=24)&&(dia<=31)))||((mes == "septiembre")&&((dia>=1)&&(dia<=23)))) {
        console.log("Tu signo zodiacal es Virgo");
    } else if (((mes == "septiembre")&&((dia>=24)&&(dia<=30)))||((mes == "octubre")&&((dia>=1)&&(dia<=23)))) {
        console.log("Tu signo zodiacal es Libra");
    } else if (((mes == "octubre")&&((dia>=24)&&(dia<=31)))||((mes == "noviembre")&&((dia>=1)&&(dia<=22)))) {
        console.log("Tu signo zodiacal es Escorpion");
    } else if (((mes == "noviembre")&&((dia>=23)&&(dia<=30)))||((mes == "diciembre")&&((dia>=1)&&(dia<=21)))) {
        console.log("Tu signo zodiacal es Sagitario");
    } else {
        console.log("El mes ingresado no es valido. :(");
    }
} else{
    console.log("El dia ingresado no es valido. :(");
}
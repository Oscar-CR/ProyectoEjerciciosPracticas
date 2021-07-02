

function precio(){
    var texto = document.getElementById("numeroSala").value;
    var funcion = document.getElementById("numeroFuncion");
    var persona = document.getElementById("persona").value;
    var boletos = document.getElementById("cantidadBoletos").value;
    var total;
    var descuento;
    var textoFuncion = funcion.options[funcion.selectedIndex].text;

    if(texto=="2d" && persona=="general"){
        total=boletos*50
        document.getElementById("funciones").innerHTML=textoFuncion;
        document.getElementById("totalPrecio").innerHTML=total;
        document.getElementById("tipox").innerHTML="GENERAL";


    }else if(texto=="3d" && persona=="general" ){
        total=boletos*60;
        document.getElementById("funciones").innerHTML=textoFuncion;
        document.getElementById("totalPrecio").innerHTML=total;
        document.getElementById("tipox").innerHTML="GENERAL";
    }else if(texto=="imax" && persona=="general" ){
        total=boletos*140;
        document.getElementById("funciones").innerHTML=textoFuncion;
        document.getElementById("totalPrecio").innerHTML=total;
        document.getElementById("tipox").innerHTML="GENERAL";

    }

    if(texto=="2d" && persona=="alumno"){
        descuento=(boletos*50)*.20;
        total=(boletos*50) - descuento
        document.getElementById("funciones").innerHTML=textoFuncion;
        document.getElementById("totalPrecio").innerHTML=total;
        document.getElementById("tipox").innerHTML="ALUMNO";
    }else if(texto=="3d" && persona=="alumno" ){
        descuento=(boletos*60)*.20;
        total=(boletos*60) -descuento;
        document.getElementById("funciones").innerHTML=textoFuncion;
        document.getElementById("totalPrecio").innerHTML=total;
        document.getElementById("tipox").innerHTML="ALUMNO";
    }else if(texto=="imax" && persona=="alumno" ){
        descuento=(boletos*140)*.20;
        total=(boletos*140)-descuento;
        document.getElementById("funciones").innerHTML=textoFuncion;
        document.getElementById("totalPrecio").innerHTML=total;
        document.getElementById("tipox").innerHTML="ALUMNO";
    }

    if(texto=="2d" && persona=="mayor"){
        descuento=(boletos*50)*.33;
        total=(boletos*50) - descuento
        document.getElementById("funciones").innerHTML=textoFuncion;
        document.getElementById("totalPrecio").innerHTML=total;
        document.getElementById("tipox").innerHTML="ADULTO MAYOR";
    }else if(texto=="3d" && persona=="mayor" ){
        descuento=(boletos*60)*.33;
        total=(boletos*60) -descuento;
        document.getElementById("funciones").innerHTML=textoFuncion;
        document.getElementById("totalPrecio").innerHTML=total;
        document.getElementById("tipox").innerHTML="ADULTO MAYOR";
    }else if(texto=="imax" && persona=="mayor" ){
        descuento=(boletos*140)*.33;
        total=(boletos*140)-descuento;
        document.getElementById("funciones").innerHTML=textoFuncion;
        document.getElementById("totalPrecio").innerHTML=total;
        document.getElementById("tipox").innerHTML="ADULTO MAYOR";
    }

    if(texto=="2d" && persona=="profesor"){
        descuento=(boletos*50)*.12;
        total=(boletos*50) - descuento
        document.getElementById("funciones").innerHTML=textoFuncion;
        document.getElementById("totalPrecio").innerHTML=total;
        document.getElementById("tipox").innerHTML="PROFESOR";
    }else if(texto=="3d" && persona=="profesor" ){
        descuento=(boletos*60)*.12;
        total=(boletos*60) -descuento;
        document.getElementById("funciones").innerHTML=textoFuncion;
        document.getElementById("totalPrecio").innerHTML=total;
        document.getElementById("tipox").innerHTML="PROFESOR";
    }else if(texto=="imax" && persona=="profesor" ){
        descuento=(boletos*140)*.12;
        total=(boletos*140)-descuento;
        document.getElementById("funciones").innerHTML=textoFuncion;
        document.getElementById("totalPrecio").innerHTML=total;
        document.getElementById("tipox").innerHTML="PROFESOR";
    }

}
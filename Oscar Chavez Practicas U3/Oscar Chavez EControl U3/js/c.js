function sumar(){
    let num=document.getElementById("numerador").value;
    let deno=document.getElementById("denominador").value;
    let num1=document.getElementById("numerador1").value;
    let deno1=document.getElementById("denominador1").value;
    let resultado;
    let denominadorEquivalente;
    let num1Equivalente;
    let num2Equivalente;
    let sumaEquivalente;

    if(deno==deno1){
        resultado= parseFloat(num)+parseFloat(num1)
        if(resultado>deno){
            alert("El resultado es: "+ resultado + " / "+ deno + "; Es una fracción impropia.");
        }else if(resultado<deno){
            alert("El resultado es: "+ resultado + " / "+ deno + "; Es una fracción propia.");
        }else if(resultado==deno){
            alert("El resultado es: "+ resultado + " / "+ deno + "; Es una fracción aparente");
        }
    }else{
        denominadorEquivalente=deno*deno1;
        num1Equivalente=num*deno1;
        num2Equivalente=num1*deno;
        sumaEquivalente=parseFloat(num1Equivalente)+ parseFloat(num2Equivalente);
        if(sumaEquivalente>denominadorEquivalente){
            alert("El resultado es: "+ sumaEquivalente + " / " + denominadorEquivalente + "; Es una fracción impropia" );
        }else if(sumaEquivalente<denominadorEquivalente){
            alert("El resultado es: "+ sumaEquivalente + " / " + denominadorEquivalente + "; Es una fracción propia" );
        }else if(sumaEquivalente==denominadorEquivalente){
            alert("El resultado es: "+ sumaEquivalente + " / " + denominadorEquivalente + "; Es una fracción aparente" );
        }
    }
    
}

function restar(){
    let num=document.getElementById("numerador2").value;
    let deno=document.getElementById("denominador2").value;
    let num1=document.getElementById("numerador21").value;
    let deno1=document.getElementById("denominador21").value;
    let resultado;
    let denominadorEquivalente;
    let num1Equivalente;
    let num2Equivalente;
    let sumaEquivalente;

    if(deno==deno1){
        resultado= parseFloat(num)-parseFloat(num1)
        if(resultado>deno){
            alert("El resultado es: "+ resultado + " / "+ deno + "; Es una fracción impropia.");
        }else if(resultado<deno){
            alert("El resultado es: "+ resultado + " / "+ deno + "; Es una fracción propia.");
        }else if(resultado==deno){
            alert("El resultado es: "+ resultado + " / "+ deno + "; Es una fracción aparente");
        }
    }else{
        denominadorEquivalente=deno*deno1;
        num1Equivalente=num*deno1;
        num2Equivalente=num1*deno;
        sumaEquivalente=parseFloat(num1Equivalente)- parseFloat(num2Equivalente);
        if(sumaEquivalente>denominadorEquivalente){
            alert("El resultado es: "+ sumaEquivalente + " / " + denominadorEquivalente + "; Es una fracción impropia" );
        }else if(sumaEquivalente<denominadorEquivalente){
            alert("El resultado es: "+ sumaEquivalente + " / " + denominadorEquivalente + "; Es una fracción propia" );
        }else if(sumaEquivalente==denominadorEquivalente){
            alert("El resultado es: "+ sumaEquivalente + " / " + denominadorEquivalente + "; Es una fracción aparente" );
        }
    }
    
}

function multiplicar(){
    let num=document.getElementById("numerador3").value;
    let deno=document.getElementById("denominador3").value;
    let num1=document.getElementById("numerador31").value;
    let deno1=document.getElementById("denominador31").value;
    let denominadorEquivalente;
    let numeradorEquivalente;

    numeradorEquivalente= parseFloat(num)*parseFloat(num1);
    denominadorEquivalente= parseFloat(deno)*parseFloat(deno1);

    if(numeradorEquivalente>denominadorEquivalente){
        alert("El resultado es: "+ numeradorEquivalente + " / "+ denominadorEquivalente + "; Es una fracción impropia.");
    }else if(numeradorEquivalente<denominadorEquivalente){
        alert("El resultado es: "+ numeradorEquivalente + " / "+ denominadorEquivalente + "; Es una fracción propia.");
    }else if(numeradorEquivalente==denominadorEquivalente){
        alert("El resultado es: "+ numeradorEquivalente + " / "+ denominadorEquivalente + "; Es una fracción aparente");
    }
    
}

function dividir(){
    let num=document.getElementById("numerador4").value;
    let deno=document.getElementById("denominador4").value;
    let num1=document.getElementById("numerador41").value;
    let deno1=document.getElementById("denominador41").value;
    let denominadorEquivalente;
    let numeradorEquivalente;

    numeradorEquivalente= parseFloat(num)*parseFloat(deno1);
   denominadorEquivalente= parseFloat(num1)*parseFloat(deno);

    if(numeradorEquivalente>denominadorEquivalente){
        alert("El resultado es: "+ numeradorEquivalente + " / "+ denominadorEquivalente + "; Es una fracción impropia.");
    }else if(numeradorEquivalente<denominadorEquivalente){
        alert("El resultado es: "+ numeradorEquivalente + " / "+ denominadorEquivalente + "; Es una fracción propia.");
    }else if(numeradorEquivalente==denominadorEquivalente){
        alert("El resultado es: "+ numeradorEquivalente + " / "+ denominadorEquivalente + "; Es una fracción aparente");
    }
    
}

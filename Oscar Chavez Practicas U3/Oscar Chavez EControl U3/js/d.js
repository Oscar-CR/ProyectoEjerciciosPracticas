function factorial(){
    let numero= document.getElementById("factorial1").value;
    let n = parseInt(numero);
    let total = 1; 

	for (i=1; i<=n; i++) {
		total = total * i; 
	}
    document.getElementById("resultadoFactorial").innerHTML="El factorial es: "+total;

}

function ra(){
    let numero= document.getElementById("raiz").value;
    let r= Math.sqrt(numero);
    document.getElementById("resultadoRaiz").innerHTML="La raiz es: "+r;
}

function cu(){
    let numero= document.getElementById("cubo").value;
    let r=Math.pow(numero,3);
    document.getElementById("resultadoCubo").innerHTML="El cubo es: " + r;
}

function ran(){
    let numero=document.getElementById("numero").value;
    let numero2=document.getElementById("numero2").value;
    let n1=parseInt(numero);
    let n2=parseInt(numero2);
    let arr=new Array()
    if(n1>n2){
        for(i=n2;i<=n1;i++){
            arr[i]= i;
            document.getElementById("resultadoRango").innerHTML=arr;
        }
    }else{
        alert("El primer numero debe ser mayo")
    }
}

function comp(){
    let numero= document.getElementById("numer1").value;
    let numero2= document.getElementById("numer2").value;
    let numero3= document.getElementById("numer3").value;
    let num1= parseInt(numero);
    let num2=parseInt(numero2);
    let num3= parseInt(numero3);

    if(num1>num2 && num1>num3){
        if(num2>num3){
            document.getElementById("mayorComp").innerHTML="Mayor: "+num1;
            document.getElementById("medioComp").innerHTML="Intermedio: "+num2;
            document.getElementById("menorComp").innerHTML="Menor: "+num3;         
        }else{
            document.getElementById("mayorComp").innerHTML="Mayor: "+num1;
            document.getElementById("medioComp").innerHTML="Intermedio: "+num3;
            document.getElementById("menorComp").innerHTML="Menor: "+num2;     
        }
    }else if(num2>num3 && num2>num1){
        if(num3>num1){
            document.getElementById("mayorComp").innerHTML="Mayor: "+num2;
            document.getElementById("medioComp").innerHTML="Intermedio: "+num3;
            document.getElementById("menorComp").innerHTML="Menor: "+num1;     
        }else{
            document.getElementById("mayorComp").innerHTML="Mayor: "+num2;
            document.getElementById("medioComp").innerHTML="Intermedio: "+num1;
            document.getElementById("menorComp").innerHTML="Menor: "+num3;     
        }
    }else if(num3>num2 && num3>num1){
        if(num2>num1){
            document.getElementById("mayorComp").innerHTML="Mayor: "+num3;
            document.getElementById("medioComp").innerHTML="Intermedio: "+num2;
            document.getElementById("menorComp").innerHTML="Menor: "+num1;     
        }else{
            document.getElementById("mayorComp").innerHTML="Mayor: "+num3;
            document.getElementById("medioComp").innerHTML="Intermedio: "+num1;
            document.getElementById("menorComp").innerHTML="Menor: "+num2;     
        }   
    }
}
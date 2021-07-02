function cuadrado(){
    let area = confirm("¿Desea calcular el área?");
    if(area){
        let a= prompt("Ingrese el valor de a");
        let a1=a*a;
        alert("El área es: " +a1)
    }else{
        let perimetro = confirm("¿Desea calcular el perimetro");
        if(perimetro){
            let a= prompt("Ingrese el valor de a");
            let p=a*4;
            alert("El perimetro es: "+ p)
        }
    }
}

function rectangulo(){
    let area = confirm("¿Desea calcular el área?");
    if(area){
        let a= prompt("Ingrese el valor de a");
        let b=prompt("Ingrese el valor de b")
        let a1=(a*b)/2;
        alert("El área es: " +a1)
    }else{
        let perimetro = confirm("¿Desea calcular el perimetro");
        if(perimetro){
            let a= prompt("Ingrese el valor de a");
            let b=prompt("Ingrese el valor de b")
            let p=2*(parseFloat(b)+parseFloat(a));
            alert("El perímetros es: "+p )
        }
    }
}

function circulo(){
    let area = confirm("¿Desea calcular el área?");
    if(area){
        let r= prompt("Ingrese el valor de r");
        let a1=3.1416*(r*r);
        alert("El área es: " +a1)
    }else{
        let perimetro = confirm("¿Desea calcular el perimetro");
        if(perimetro){
            let r= prompt("Ingrese el valor de r");
            let p=2*3.1416*r;
            alert("El perimetro es: "+ p)
        }
    }
}

function rombo(){
    let area = confirm("¿Desea calcular el área?");
    if(area){
        let d= prompt("Ingrese el valor de d");
        let d2=prompt("Ingrese el valor de D")
        let a1=(d*d2)/2;
        alert("El área es: " +a1)
    }else{
        let perimetro = confirm("¿Desea calcular el perimetro");
        if(perimetro){
            let a= prompt("Ingrese el valor de a");
            let p=4*a;
            alert("El perímetros es: "+p )
        }
    }
}

function trianguloEquilatero(){
    let area = confirm("¿Desea calcular el área?");
    if(area){
        let a= prompt("Ingrese el valor de a");
        let a1=((a*a)*Math.sqrt(3))/4;
        alert("El área es: " +a1)
    }else{
        let perimetro = confirm("¿Desea calcular el perimetro");
        if(perimetro){
            let a= prompt("Ingrese el valor de a");
            let p=a*3;
            alert("El perimetro es: "+ p)
        }
    }
}

function trapecio(){
    let area = confirm("¿Desea calcular el área?");
    if(area){
        let b= prompt("Ingrese el valor de B");
        let b1=prompt("Ingrese el valor de b");
        let h=prompt("Ingrese el valor de h");
        let a1=((parseFloat(b)+parseFloat(b))*h)/2
        alert("El área es: " +a1)
    }else{
        let perimetro = confirm("¿Desea calcular el perimetro");
        if(perimetro){
            let b= prompt("Ingrese el valor de B");
            let b1=prompt("Ingrese el valor de b");
            let h=prompt("Ingrese el valor de h");
            let c=prompt("Ingrese el valor de c");
            let p=parseFloat(b)+parseFloat(b1)+parseFloat(h)+parseFloat(c)
            alert("El perímetros es: "+p )
        }
    }
}

function trapecioRecto(){
    let area = confirm("¿Desea calcular el área?");
    if(area){
        let b= prompt("Ingrese el valor de B");
        let b1=prompt("Ingrese el valor de b");
        let h=prompt("Ingrese el valor de h");
        let a1=((parseFloat(b)+parseFloat(b))*h)/2
        alert("El área es: " +a1)
    }else{
        let perimetro = confirm("¿Desea calcular el perimetro");
        if(perimetro){
            let b= prompt("Ingrese el valor de B");
            let b1=prompt("Ingrese el valor de b");
            let h=prompt("Ingrese el valor de h");
            let c=prompt("Ingrese el valor de c");
            let p=parseFloat(b)+parseFloat(b1)+parseFloat(h)+parseFloat(c)
            alert("El perímetros es: "+p )
        }
    }
}

function trianguloIsosceles(){
    let area = confirm("¿Desea calcular el área?");
    if(area){
        let b= prompt("Ingrese el valor de b");
        let h= prompt("Ingrese el valor de h");
        let a1=b*h/2;
        alert("El área es: " +a1)
    }else{
        let perimetro = confirm("¿Desea calcular el perimetro");
        if(perimetro){
            let a= prompt("Ingrese el valor de a");
            let b= prompt("Ingrese el valor de b");
            let p=2*(parseFloat(a)+parseFloat(b));
            alert("El perimetro es: "+ p)
        }
    }
}

function trianguloEscaleno(){
    let area = confirm("¿Desea calcular el área?");
    if(area){
        let b= prompt("Ingrese el valor de b");
        let h= prompt("Ingrese el valor de h");
        let a1=b*h/2;
        alert("El área es: " +a1)
    }else{
        let perimetro = confirm("¿Desea calcular el perimetro");
        if(perimetro){
            let a= prompt("Ingrese el valor de a");
            let b= prompt("Ingrese el valor de b");
            let c= prompt("Ingrese el valor de c");
            let p=parseFloat(a)+parseFloat(b)+parseFloat(c);
            alert("El perimetro es: "+ p)
        }
    }
}

function pentagono(){
    let area = confirm("¿Desea calcular el área?");
    if(area){
        let p= prompt("Ingrese el Perimetro");
        let a= prompt("Ingrese el valor de a");
        let a1=(p*a)/2;
        alert("El área es: " +a1)
    }else{
        let perimetro = confirm("¿Desea calcular el perimetro");
        if(perimetro){
            let b= prompt("Ingrese el valor de b");
            let p=5*b;
            alert("El perimetro es: "+ p)
        }
    }
}

function hexagono(){
    let area = confirm("¿Desea calcular el área?");
    if(area){
        let p= prompt("Ingrese el Perimetro");
        let a= prompt("Ingrese el valor de a");
        let a1=(p*a)/2;
        alert("El área es: " +a1)
    }else{
        let perimetro = confirm("¿Desea calcular el perimetro");
        if(perimetro){
            let b= prompt("Ingrese el valor de b");
            let p=6*b;
            alert("El perimetro es: "+ p)
        }
    }
}

function elipse(){
    let area = confirm("¿Desea calcular el área?");
    if(area){
        let a= prompt("Ingrese el valor de a");
        let b= prompt("Ingrese el valor de b");
        let a1=3.1416*(a*b);
        alert("El área es: " +a1)
    }else{
        let perimetro = confirm("¿Desea calcular el perimetro");
        if(perimetro){
            let a= prompt("Ingrese el valor de a");
            let b= prompt("Ingrese el valor de b");
            let p=3.1416*(parseFloat(a)+parseFloat(b));
            alert("El perimetro es: "+ p)
        }
    }
}
function validar(){
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("contra").value;

    if(user=="Lagarto21&tec" && pass=="ProWeb@21"){
       window.location="menu.html"
    }else{
        alert("Contraseña incorrecta");
    }
} 


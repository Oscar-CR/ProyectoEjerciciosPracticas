function validar(){
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("contra").value;

    if(user=="Oscar Chavez" && pass=="Tec21proSP25"){
       window.location="menu.html"
    }else{
        alert("Contraseña incorrecta");
    }
} 


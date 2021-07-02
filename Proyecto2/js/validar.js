function validar(){
    let us = document.getElementById("usuario").value;
    let pa=document.getElementById("pass").value;

    if(us=='ReGreSo21@' && pa=='Gatelcovid19'){
        window.location="https://dynamoddos.000webhostapp.com/php/alumno.php";
    }else{
        alert("Contrasena Incorrecta");
    }

}
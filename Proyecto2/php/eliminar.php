<?php
    include("conect.php");
    $con=conectar();
    
    $nControl=$_GET['id'];

    $sql="DELETE  FROM alumno WHERE nControl= '$nControl'";
    $query=mysqli_query($con,$sql);

    if($query){
        Header("Location: alumno.php");
    }else{
        Header("Location: alumno.php");
    }

?>
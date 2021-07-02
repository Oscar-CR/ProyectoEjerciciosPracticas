<?php
    include('conect.php');
    $con=conectar();

    $nControl=$_POST['nControl'];
    $nombre=$_POST['nombre'];
    $paterno=$_POST['paterno'];
    $materno=$_POST['materno'];
    $cali1=$_POST['cali1'];
    $cali2=$_POST['cali2'];
    $cali3=$_POST['cali3'];
    $cali4=$_POST['cali4'];
    $cali5=$_POST['cali5'];

    $sql="INSERT INTO alumno (nControl, nombre,paterno,materno,cali1,cali2,cali3,cali4,cali5)VALUES('$nControl','$nombre','$paterno','$materno','$cali1','$cali2','$cali3','$cali4','$cali5')";
    $query=mysqli_query($con,$sql);

    if($query){
        Header("Location: alumno.php");
    }else{
        Header("Location: alumno.php");
    }

?>
<?php
    include("conect.php");
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

    $sql="UPDATE alumno SET  nombre='$nombre', paterno='$paterno',materno='$materno',cali1='$cali1',cali2='$cali2',cali3='$cali3',cali4='$cali4',cali5='$cali5' WHERE nControl='$nControl'";
    $query=mysqli_query($con,$sql);

    if($query){
        Header("Location: alumno.php");
    }else{
        Header("Location: alumno.php");
    }


?>
<?php
    include("conect.php");
    $con=conectar();

    $id= $_POST['buscar'];

    $sql="SELECT * FROM alumno WHERE nControl='$id'";
    $query=mysqli_query($con,$sql);

    $row=mysqli_fetch_array($query);

?>


<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="../css/actualizar.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alumnos</title>
</head>
<body>
    <div class="formulario">
        <div class="datos">
            <h2>Datos del Alumno</h2>
            <form action="alumno.php">
            <p>Número de Control</p>    
            <input  type="text" name="nControl" placeholder="Ingrese el numero de control" value="<?php echo $row['nControl']?>" readonly>
            <p>Nombre</p> 
            <input  type="text" name="nombre" placeholder="Ingrese el nombre" value="<?php echo $row['nombre']?>" readonly>
            <p>Apellido Paterno</p> 
            <input  type="text" name="paterno" placeholder="Ingrese el apellido "value="<?php echo $row['paterno']?>" readonly>
            <p>Apellido Materno</p> 
            <input  type="text" name="materno" placeholder="Ingrese el apellido" value="<?php echo $row['materno']?>" readonly>
            <p>Calificación Unidad 1</p> 
            <input  type="text" name="cali1" placeholder="Ingrese calificación"value="<?php echo $row['cali1']?>" readonly>
            <p>Calificación Unidad 2</p> 
            <input  type="text" name="cali2" placeholder="Ingrese calificación"value="<?php echo $row['cali2']?>" readonly>
            <p>Calificación Unidad 3</p> 
            <input  type="text" name="cali3" placeholder="Ingrese calificación"value="<?php echo $row['cali3']?>" readonly>
            <p>Calificación Unidad 4</p> 
            <input  type="text" name="cali4" placeholder="Ingrese calificacón"value="<?php echo $row['cali4']?>" readonly>
            <p>Calificación Unidad 5</p> 
            <input  type="text" name="cali5" placeholder="Ingrese calificacón"value="<?php echo $row['cali5']?>" readonly>
            <p></p>
            <input type="submit" value="REGRESAR" class="bot">
            </form>
        </div>       
    </div>
</body>
</html>
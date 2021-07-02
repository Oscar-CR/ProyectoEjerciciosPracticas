<?php
include("conect.php");
$con = conectar();
$sql = "SELECT * FROM alumno";
$query = mysqli_query($con, $sql);
$row = mysqli_fetch_array($query);

?>



<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/alumnos.css">
    <title>Alumnos</title>
</head>

<body>
    <div class="formulario">

        <div class="datos">
            <form action="insertar.php" method="POST">
                    <h2>Ingresar Datos</h2>
                    <p>Número de Control</p>
                    <input type="text" name="nControl" placeholder="Ingrese el numero de control">
                    <p>Nombre</p>
                    <input type="text" name="nombre" placeholder="Ingrese el nombre">
                    <p>Apellido Paterno</p>
                    <input type="text" name="paterno" placeholder="Ingrese el apellido ">
                    <p>Apellido Materno</p>
                    <input type="text" name="materno" placeholder="Ingrese el apellido">
                    <p>Calificación Unidad 1</p>
                    <input type="text" name="cali1" placeholder="Ingrese calificación">
                    <p>Calificación Unidad 2</p>
                    <input type="text" name="cali2" placeholder="Ingrese calificación">
                    <p>Calificación Unidad 3</p>
                    <input type="text" name="cali3" placeholder="Ingrese calificación">
                    <p>Calificación Unidad 4</p>
                    <input type="text" name="cali4" placeholder="Ingrese calificacón">
                    <p>Calificación Unidad 5</p>
                    <input type="text" name="cali5" placeholder="Ingrese calificacón">
                    <p></p>
                    <input type="submit" value="REGISTRAR" class="registrar">
            </form>
        </div>

        <div class="tabla">
            <h3>Alumnos</h3>
            <table border="1px">
                <thead>
                    <tr>
                        <td>Número de Control</td>
                        <td>Nombre</td>
                        <td>Apellido Paterno</td>
                        <td>Apellido Materno</td>
                        <td>U1</td>
                        <td>U2</td>
                        <td>U3</td>
                        <td>U4</td>
                        <td>U5</td>
                        <td>Final</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>

                <?php

                while ($row = mysqli_fetch_array($query)) {
                ?>

                    <tbody>
                        <tr>
                            <td><?php echo $row['nControl'] ?></td>
                            <td><?php echo $row['nombre'] ?></td>
                            <td><?php echo $row['paterno'] ?></td>
                            <td><?php echo $row['materno'] ?></td>
                            <td><?php echo $row['cali1'] ?></td>
                            <td><?php echo $row['cali2'] ?></td>
                            <td><?php echo $row['cali3'] ?></td>
                            <td><?php echo $row['cali4'] ?></td>
                            <td><?php echo $row['cali5'] ?></td>
                            <td><?php echo $row['final'] ?></td>
                            <td ><a class="update" href="actualizar_datos.php?id=<?php echo $row['nControl'] ?>"> Actualizar</a></td>
                            <td ><a class="delete" href="eliminar.php?id=<?php echo $row['nControl'] ?>">Eliminar</a> </td>
                        </tr>
                    </tbody>

                <?php

                }

                ?>
            </table>
        </div>

    </div>


    <div class="buscar">
        <form action="buscar.php" method="POST">
            <h3>Buscar alumno</h3>
            <input type="Ingrese el Numero de Cotrol" name="buscar"\>
            <input type="submit" value="BUSCAR" class="buscar-alumno" >
        </form>
    </div>

</body>

</html>
<?php
    echo "Bv";

    require_once './clases/Conexion.php';
    $conexion = new Conexion();
    echo $conexion->getInfoConexion();
?>
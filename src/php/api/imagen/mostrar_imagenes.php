<?php
 require_once '../../clases/Conexion.php';

 $conexion = new Conexion();
 $resultado = $conexion->SetSelect("Imagen");
 echo json_encode($resultado);

?>
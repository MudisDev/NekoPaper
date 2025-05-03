<?php

require_once '../../clases/Imagen.php';

$imagen  = new Imagen($_GET);
$resultado = $imagen->Registrar_Imagen();
echo json_encode($resultado);

?>
<?php
require_once '../../clases/Etiqueta.php';

$etiqueta = new Etiqueta($_GET);
$resultado = $etiqueta->Registrar_Etiqueta();
echo json_encode($resultado);

?>
<?php
require '../../clases/Conexion.php';
require '../../clases/Imagen.php';
require '../../clases/Etiqueta.php';

$id_imagen_api = $_GET['id_imagen_api'];
$api_origen = $_GET['api_origen'];
$etiquetas_raw = $_GET['etiquetas'];
$etiquetas = explode(",", $etiquetas_raw); // ['neko', 'catgirl', 'cute']


$imagen = new Imagen(['id_imagen_api' => $id_imagen_api, 'api_origen' => $api_origen]);
$resultado = $imagen->Imagen_Existe();
echo json_encode($resultado);
$id_imagen_asociar = $resultado[0]['id_imagen'];
//echo "Imagen a asociar -> ",$id_imagen_asociar;

foreach ($etiquetas as $nombre_etiqueta) {
    $etiqueta = new Etiqueta(['api_origen' => $api_origen, 'nombre' => $nombre_etiqueta]);
    $busqueda = $etiqueta->Etiqueta_Existe();

    if (!isset($busqueda['Error'])) {
        echo json_encode($busqueda);
        $id_etiqueta_asociar = $busqueda[0]['id_etiqueta'];

        $conexion = new Conexion();
        $insercion = $conexion->SetInsert("Tiene_Etiqueta", ["id_imagen", "id_etiqueta"], [$id_imagen_asociar, $id_etiqueta_asociar]);
        echo json_encode($insercion);
        $conexion->cerrarConexion();


    } else
        echo json_encode(["Error" => "no se encontro registrada la etiqueta $nombre_etiqueta"]);
}

?>
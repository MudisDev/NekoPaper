<?php
require_once 'Conexion.php';

class Lista
{
    private $lista = [];

    public function __construct()
    {

    }

    public function Consultar_Imagenes()
    {
        $conexion = new Conexion();
        $resultado = $conexion->SetSelect("Imagen");
        $this->Set_Lista($resultado);
    }

    public function Consultar_Imagenes_Favoritas($id_usuario)
    {
        $condicion = "id_usuario = '$id_usuario'";
        $conexion = new Conexion();
        $resultado = $conexion->SetSelect("Vista_Favorito", ["*"], $condicion);
        $this->Set_Lista($resultado);
    }

    public function Consultar_Etiquetas()
    {
        $conexion = new Conexion();
        $resultado = $conexion->SetSelect("Etiqueta");
        $this->Set_Lista($resultado);
    }

    public function Set_Lista($datos)
    {
        $this->lista = $datos;
    }

    public function Get_Lista(){
        return $this->lista;
    }
}

?>
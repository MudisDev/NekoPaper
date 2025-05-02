<?php

require_once 'Conexion.php';
class Usuario
{

    private $id_usuario = null;
    private $nombre = null;
    private $username = null;
    private $email = null;
    private $password = null;
    private $genero = null;
    private $telefono = null;
    private $foto_perfil = null;

    private $array_insert = [
        "nombre",
        "username",
        "email",
        "password",
        "genero",
        "telefono",
        "foto_perfil"
    ];


    public function __construct(array $datos)
    {
        foreach ($datos as $key => $value) {
            if (property_exists($this, $key)) {
                $this->$key = $value;
            }
        }
    }

    public function RegistrarUsuario()
    {
        $conexion = new Conexion();
        $resultado = $conexion->SetInsert(
            "Usuario",
            $this->array_insert,
            [
                $this->nombre,
                $this->username,
                $this->email,
                $this->password,
                $this->genero,
                $this->telefono,
                $this->foto_perfil
            ]
        );
        return $resultado;
    }

    public function Iniciar_Sesion()
    {
        $conexion = new Conexion();
        $resultado = $conexion->IniciarSesion("Usuario", ["*"], "username", $this->username, $this->password);
        if (!isset($resultado['Error'])) {
                $this->Set_Datos($resultado[0]);
        }
        return $resultado;
    }

    public function Set_Datos(array $datos)
    {
        foreach($datos as $key => $value){
            if(property_exists($this, $key)){
                $this->$key = $value;
            }
        }
    }

}


?>
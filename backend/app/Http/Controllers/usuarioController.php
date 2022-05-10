<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class usuarioController extends Controller
{
    //

    public function index()
    {
        return Usuario::all();

    }

    public function show($id){
        return Usuario::find($id);
   }

    public function store(Request $request)
    {
        //$usuario = Usuario::create($request->all());
    $usuario=new Usuario;
    $usuario->id_usuario=$request->get('id_usuario');
    $usuario->nombre=$request->get('nombre');
    $usuario->telefono=$request->get('telefono');
    $usuario->estado='inicial';
    $usuario->save();
       // return $categoria;
        return response()->json($usuario, 201);
    }

    public function edit(Request $request, $id){
        
        $nombre=$request->input('nombre');
        $telefono=$request->input('telefono');
        $estado=$request->input('estado');

        Usuario::where('id_usuario',$id)->update(
            ['nombre'=>$nombre,'telefono'=>$telefono,'estado'=>$estado]
            );
            return json_encode(['msg'=>'Modificado y Actualizado']);
    }

    public function destroy($id){
        Usuario::destroy($id);
        return json_encode(['msg'=>'Eliminado']);
    }

    public function updateStatu($id)
    {
        $usuario=Usuario::findOrFail($id);
        $usuario->estado='aprobado';
        $usuario->update();
    }





  
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $primaryKey='id_usuario';
    public $timestamps=false;
    protected $fillable = ['nombre','telefono','estado'];
}

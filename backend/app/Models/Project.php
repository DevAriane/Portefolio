<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
    'title',
    'description',
    'image',
    'link',
    'technologies',
    'qr_code',
    'type',
];

protected $casts = [
    'technologies' => 'array',
];

// Dans ton modèle Project.php
public function getImageAttribute($value)
{
    return $value ? asset($value) : null;
}


}

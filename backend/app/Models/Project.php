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
];

protected $casts = [
    'technologies' => 'array',
];

}

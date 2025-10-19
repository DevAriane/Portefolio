<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactMessage extends Model
{
    protected $fillable = [
        'name',
        'email',
        'message',
    ];

    protected $casts = [
        'email' => 'string',
        'message' => 'string',
    ];  
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model        
{
    protected $fillable = [
        'title',
        'completed'
    ];

    // protected $table = 'members'; or any other table name, if you want to change default table name (todos)
}
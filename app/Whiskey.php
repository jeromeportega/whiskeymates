<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Whiskey extends Model
{
    protected $fillable = [
        'type',
        'distillery',
        'age',
        'barrel',
    ];

    /**
     * Establishes inverse one to many relationship to User model.
     *
     * @return void
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

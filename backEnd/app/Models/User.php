<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = ['name', 'email', 'bio', 'avatar', 'photo_path', 'password'];

    protected $hidden = ['password', 'remember_token'];

    protected function casts(): array
    {
        return [
            'password' => 'hashed',
        ];
    }

    public function skills(): HasMany
    {
        return $this->hasMany(Skill::class);
    }

    public function sentExchanges(): HasMany
    {
        return $this->hasMany(Exchange::class, 'requester_id');
    }

    public function receivedExchanges(): HasMany
    {
        return $this->hasMany(Exchange::class, 'target_id');
    }
}

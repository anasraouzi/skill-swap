<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        $offre   = $this->skills->where('type', 'offre')->pluck('name')->values();
        $cherche = $this->skills->where('type', 'cherche')->pluck('name')->values();

        return [
            'id'        => $this->id,
            'nom'       => $this->name,
            'email'     => $this->email,
            'bio'       => $this->bio ?? '',
            'avatar'    => $this->avatar ?? strtoupper(substr($this->name, 0, 2)),
            'photo_url' => $this->photo_path
                ? asset('storage/' . $this->photo_path)
                : null,
            'offre'     => $offre,
            'cherche'   => $cherche,
            'joined'    => $this->created_at->toDateString(),
        ];
    }
}

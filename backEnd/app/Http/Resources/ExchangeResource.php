<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ExchangeResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'          => $this->id,
            'requester'   => new UserResource($this->whenLoaded('requester')),
            'target'      => new UserResource($this->whenLoaded('target')),
            'status'      => $this->status,
            'message'     => $this->message,
            'created_at'  => $this->created_at->toDateTimeString(),
        ];
    }
}

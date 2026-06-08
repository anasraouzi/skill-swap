<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreExchangeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'target_id' => ['required', 'integer', 'exists:users,id', 'different:' . $this->user()->id],
            'message'   => ['nullable', 'string', 'max:500'],
        ];
    }
}

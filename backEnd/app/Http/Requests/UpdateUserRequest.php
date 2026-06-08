<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->id === (int) $this->route('user');
    }

    public function rules(): array
    {
        return [
            'nom'  => ['sometimes', 'required', 'string', 'max:255'],
            'bio'  => ['sometimes', 'nullable', 'string', 'max:1000'],
        ];
    }
}

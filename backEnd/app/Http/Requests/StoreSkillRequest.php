<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSkillRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->id === (int) $this->route('user');
    }

    public function rules(): array
    {
        return [
            'type' => ['required', 'in:offre,cherche'],
            'name' => ['required', 'string', 'max:100'],
        ];
    }
}

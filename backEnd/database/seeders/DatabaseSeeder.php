<?php

namespace Database\Seeders;

use App\Models\Skill;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $students = [
            [
                'name'    => 'Hassan',
                'email'   => 'hassan@exemple.fr',
                'bio'     => "Étudiant en master informatique, passionné de musique et d'IA.",
                'avatar'  => 'H',
                'offre'   => ['Python', 'Machine Learning', 'Git', 'SQL'],
                'cherche' => ['Guitare', 'Espagnol', 'Design graphique'],
            ],
            [
                'name'    => 'Amin',
                'email'   => 'amin@exemple.fr',
                'bio'     => 'En licence de musique et arts. Fan de langues étrangères et voyages.',
                'avatar'  => 'A',
                'offre'   => ['Guitare acoustique', 'Théorie musicale', 'Espagnol'],
                'cherche' => ['Python', 'Excel', 'Photographie'],
            ],
            [
                'name'    => 'Hicham bn',
                'email'   => 'hicham@exemple.fr',
                'bio'     => 'Designer UX/UI en alternance. Adore la photo et les voyages en solo.',
                'avatar'  => 'HB',
                'offre'   => ['Design graphique', 'Figma', 'Photographie', 'Illustrator'],
                'cherche' => ['Yoga', 'Machine Learning', 'Couture'],
            ],
            [
                'name'    => 'Fatiha el',
                'email'   => 'fatiha@exemple.fr',
                'bio'     => 'Étudiant en économie. Pratique le yoga depuis 3 ans, fan de couture.',
                'avatar'  => 'FE',
                'offre'   => ['Excel avancé', 'Yoga', 'Couture', 'Comptabilité'],
                'cherche' => ['Guitare acoustique', 'Figma', 'Git'],
            ],
        ];

        foreach ($students as $data) {
            $user = User::firstOrCreate(
                ['email' => $data['email']],
                [
                    'name'     => $data['name'],
                    'bio'      => $data['bio'],
                    'avatar'   => $data['avatar'],
                    'password' => Hash::make(Str::random(32)),
                ]
            );

            foreach ($data['offre'] as $skillName) {
                Skill::firstOrCreate([
                    'user_id' => $user->id,
                    'type'    => 'offre',
                    'name'    => $skillName,
                ]);
            }

            foreach ($data['cherche'] as $skillName) {
                Skill::firstOrCreate([
                    'user_id' => $user->id,
                    'type'    => 'cherche',
                    'name'    => $skillName,
                ]);
            }
        }
    }
}

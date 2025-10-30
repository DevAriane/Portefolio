<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        Project::insert([
            [
                'title' => "Portfolio Personnel",
                'description' => "Un portfolio personnel développé avec Laravel pour le backend et React.js pour le frontend. Il présente mes projets, compétences et expériences professionnelles. Le site est conçu pour être réactif et offre une navigation fluide, mettant en valeur mes réalisations de manière professionnelle.",
                'image' => 'portefolio.png',
                'link' => '#',
                'technologies' => json_encode(['Laravel', 'React.js', 'PHP']),
                'qr_code' => null,
                'type' => 'web',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => "Design d'interfaces utilisateur pour une application de livraison de repas",
                'description' => "Cette application de livraison de repas, conçue avec Laravel et React Native, permet aux utilisateurs de parcourir les menus, passer des commandes et suivre la livraison en temps réel. Elle offre une interface conviviale et des paiements sécurisés.",
                'image' => 'figma.png',
                'link' => 'https://www.figma.com/design/imBqhcXpR77y0ZLemk71F8/Untitled?node-id=737-1179&t=SuoLaPjxgl5zpXqw-0',
                'technologies' => json_encode(['Laravel', 'React Native', 'Tailwind CSS']),
                'qr_code' => null,
                'type' => 'web',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => "Mise en œuvre d'une application mobile de suivi des commandes et livraisons",
                'description' => "Application mobile développée avec React Native et Firebase, permettant aux utilisateurs de suivre leurs commandes en temps réel et recevoir des notifications.",
                'image' => '',
                'link' => 'https://expo.dev/accounts/ariane_ateumo/projects/projet/builds/d5d1b01c-be06-420c-be5b-31abb69d10bf',
                'technologies' => json_encode(['React Native', 'Firebase', 'Javascript']),
                'qr_code' => null,
                'type' => 'mobile',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}

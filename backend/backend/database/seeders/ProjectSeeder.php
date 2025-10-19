<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;
class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        Project::insert(
            
             [
            'title' => "Portfolio Personnel",
            'description' => "Un portfolio personnel développé avec Laravel pour le backend et React.js pour le frontend. Il présente mes projets, compétences et expériences professionnelles. Le site est conçu pour être réactif et offre une navigation fluide, mettant en valeur mes réalisations de manière professionnelle.",
            'image' => 'projects/portfolio.png',
            'link' => ' #',
            'technologies' => ['Laravel', 'React.js', 'PHP',],
            'qr_code' => null,
             ],
             [
            'title' => "Design d'interfaces utilisateur pour une application de livraison de repas",
            'description' => "Cette application de livraison de repas, conçue avec Laravel et React Native.js, permet aux utilisateurs de parcourir les menus des restaurants locaux, de passer des commandes et de suivre la livraison en temps réel. L'application offre une interface conviviale avec des fonctionnalités telles que les avis des utilisateurs, les options de personnalisation des commandes et les paiements sécurisés en ligne. Elle vise à améliorer l'expérience de commande de repas en offrant une solution rapide et efficace pour les utilisateurs.",
            'image' => 'projects/figma.png',
            'link' => 'https://www.figma.com/design/imBqhcXpR77y0ZLemk71F8/Untitled?node-id=737-1179&t=SuoLaPjxgl5zpXqw-0'    ,
            'technologies' => ['Laravel', 'React Native', 'Tailwind CSS'],
            'qr_code' => null,
 
        ],
             [
            'title' => "Mise en oeuvre d'une application mobile de suivi des commandes et livraisons",
            'description' => "Cette application mobile, développée avec React Native et Firebase, permet aux utilisateurs de suivre leurs commandes en temps réel. Elle offre une interface conviviale pour visualiser l'état des livraisons, recevoir des notifications et gérer les préférences de livraison. L'application vise à améliorer l'expérience utilisateur en fournissant des informations précises et à jour sur les commandes.",
            'image' => '',
            'link' => 'https://expo.dev/accounts/ariane_ateumo/projects/projet/builds/d5d1b01c-be06-420c-be5b-31abb69d10bf',
            'technologies' => ['React Native', 'Firebase', 'Javascript'],
            'qr_code' => null,
        ],
        // [
        //     'title' => "Ap",
        //     'description' => "Une application web de gestion de tâches développée avec Laravel et Vue.js. Elle permet aux utilisateurs de créer, organiser et suivre leurs tâches quotidiennes. L'application offre des fonctionnalités telles que la création de listes de tâches, la définition de priorités, les rappels et la collaboration en temps réel avec d'autres utilisateurs.",
        //     'image' => 'projects/task_manager.png',
        //     'link' => '',
        //     'technologies' => ['Laravel', 'Vue.js', 'MySQL'],
        //     'qr_code' => null,  
        // ]
       
    );
    }
}

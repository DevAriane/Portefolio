<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeders.
     */
    public function run(): void
    {
        // Création de quelques utilisateurs factices
        \App\Models\User::factory(10)->create();

        // Exécuter le seeder des projets
        $this->call([
            // ProjectSeeder::class,
        ]);
    }
}

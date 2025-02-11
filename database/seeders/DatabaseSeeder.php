<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $categories = [
            [
                'name' => 'Category 1',
                'description' => 'Description 1',
            ],
            [
                'name' => 'Category 2',
                'description' => 'Description 2',
            ],
            [
                'name' => 'Category 3',
                'description' => 'Description 3',
            ]  
            ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}

<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Brand;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $brands = [
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

        foreach ($brands as $brand) {
            Brand::create($brand);
        }

        Product::factory(10)->create();

        Order::factory(10)->create();

        OrderItem::factory(10)->create();


    }
}

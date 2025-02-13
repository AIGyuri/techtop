<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'description' => fake()->text(255),
            'price' => fake()->numberBetween(0, 200000),
            'image' => fake()->imageUrl(),
            'stock_quantity' => fake()->numberBetween(0, 100),
            'category_id' => fake()->numberBetween(1, 3),
            'created_at' => now(),
        ];
    }
}

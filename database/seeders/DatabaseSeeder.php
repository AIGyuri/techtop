<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Brand;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Support\Facades\File;

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
                'name' => 'Acer',
                'description' => 'Az Acer Incorporated egy tajvani multinacionális vállalat, amely számítástechnikai eszközök előállításával foglalkozik. Ez a vállalat birtokolja a legnagyobb szabad számítógép-kereskedelmi láncot Tajpejben. Az eladások alapján az Acer a világ harmadik legnagyobb számítógépgyártója az HP, illetve a Dell Inc. után.',
            ],
            [
                'name' => 'Asus',
                'description' => 'Az ASUSTeK Computer Incorporated (ASUS) tajvani multinacionális vállalat, amely számítástechnikai eszközök előállításával foglalkozik. Ez a vállalat birtokolja a legnagyobb szabad számítógép-kereskedelmi láncot Tajpejben.',
            ],
            [
                'name' => 'Lenovo',
                'description' => 'A Lenovo Group Limited kínai vállalat, a világ vezető személyi számítógép gyártója. Az eladott darabszámokat illetően a 2012-es évben maga mögé utasította a korábbi világelső Hewlett-Packardot.',
            ],
            [
                'name' => 'MacBook',
                'description' => 'A MacBook az Apple hordozható számítógépe volt. Először 2006. május 16-án mutatták be, 2011. júliusáig forgalmazták. Az iBook G4 és a PowerBook 12" utóda volt, a többi Apple számítógéphez hasonlóan Intel processzorral szerelték.',
            ],
            [
                'name' => 'MSI',
                'description' => 'A Micro-Star International Co., Ltd. (közismert nevén MSI), egy tajvani multinacionális információtechnológiai vállalat, amelynek központja a tajvani New Taipei Cityben található .',
            ]
            ];

        foreach ($brands as $brand) {
            Brand::create($brand);
        }

        $json = File::get(database_path( 'data/products.json'));
        $products = json_decode($json, true);

        foreach ($products as $product) {
            Product::create($product);
        }

        Order::factory(10)->create();

        OrderItem::factory(10)->create();


    }
}

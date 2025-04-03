<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index() {
        $products = Product::with('brand')->get();
        $brands = Brand::all();

        return Inertia::render('Dashboard/Index', [
            'products' => $products,
            'brands' => $brands
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::with('brand')->get();
        $brands = Brand::all();

        return Inertia::render('Products', [
            'products' => $products,
            'brands' => $brands
        ]);
    }

    public function create()
    {
        $brands = Brand::all();

        return Inertia::render('Dashboard/CreateProduct', [
            'brands' => $brands
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'image' => 'string|nullable',
            'stock_quantity' =>'required|integer|min:1',
            'brand_id' => 'required|exists:brands,id',
        ]);

        Product::create($validated);

        return redirect()->route('dashboard')->with('success', 'Termék sikeresen elkészítve!');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = Product::with('brand')->find($id);
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        return Inertia::render('Product', ['product' => $product]);
    }

    public function edit($id) 
    {
        $product = Product::with('brand')->find($id);
        
        if (!$product) {
            return back()->with([ "error" => "Nem található ilyen termék" ]);
        }

        return Inertia::render('Dashboard/EditProduct', ['product' => $product]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {

        $product = Product::find($id);

        if (!$product) {
            return back()->with('error', 'Nem található ilyen termék');
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'description' => 'string',
            'stock_quantity' => 'required|integer'
        ]);
        
        $product->update($validated);
        return redirect()->back()->with('success', 'A termék módosítása sikeres!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return back()->with([ "error" => "Nem található ilyen termék" ]);
        }

        $product->delete();

        return back()->with([ "success" => "Termék sikeresen törölve" ]);
    }
}

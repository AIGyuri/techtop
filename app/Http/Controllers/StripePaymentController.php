<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Stripe\Checkout\Session;
use Stripe\Stripe;

class StripePaymentController extends Controller
{


    public function createCheckoutSession(Request $request)
    {
        Stripe::setApiKey(config('services.stripe.secret'));

        $amount = $request->input('totalprice'); // Frontendről érkező ár
        $amount = intval($amount * 100); // Stripe fillérekben számol (100 = 1 Ft)

        $session = Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price_data' => [
                    'currency' => 'huf',
                    'product_data' => [
                        'name' => 'Test Product',
                    ],
                    'unit_amount' => $amount,
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => env('APP_URL') . '/products',
            'cancel_url' => env('APP_URL') . '/cancel',
        ]);

        return response()->json(['id' => $session->id]);
    }
}

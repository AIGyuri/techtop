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
        
        $gls_standard_shipping_fee = 100000; // 1000 Ft standard szállítási költség
        $gls_express_shipping_fee = 200000; // 2000 Ft expressz szállítási költség

        $session = Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price_data' => [
                    'currency' => 'huf',
                    'product_data' => [
                        'name' => 'Termékek',
                    ],
                    'unit_amount' => $amount,
                ],
                'quantity' => 1,
            ]],
            'shipping_address_collection' => [
                'allowed_countries' => ['HU', 'DE', 'US'], // Engedélyezett országok, bővíthető pl. ['HU', 'DE', 'US']
            ],
            'shipping_options' => [
                [
                    'shipping_rate_data' => [
                        'display_name' => 'GLS szállítás',
                        'type' => 'fixed_amount',
                        'fixed_amount' => [
                            'amount' => $gls_standard_shipping_fee,
                            'currency' => 'huf',
                        ]
                    ]
                ],
                [
                    'shipping_rate_data' => [
                        'display_name' => 'GLS expressz szállítás',
                        'type' => 'fixed_amount',
                        'fixed_amount' => [
                            'amount' => $gls_express_shipping_fee,
                            'currency' => 'huf',
                        ]
                    ]
                ]
            ],
            'mode' => 'payment',
            'success_url' => env('APP_URL') . '/products',
            'cancel_url' => env('APP_URL') . '/cancel',
        ]);

        return response()->json(['id' => $session->id]);
    }
}

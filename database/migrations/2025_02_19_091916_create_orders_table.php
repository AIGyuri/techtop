<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId("user_id")->constrained('users')->onDelete("cascade");
            $table->integer("total_amount");
            $table->enum("status", ["raktárban", "kiszállítás alatt", "átvéve" , "sikertelen"])->default("raktárban");
            $table->datetime("created_at");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};

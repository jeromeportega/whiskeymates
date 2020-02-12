<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Whiskey;
use Faker\Generator as Faker;

$factory->define(Whiskey::class, function (Faker $faker) {
    return [
        'user_id' => $faker->numberBetween(0),
        'type' => $faker->word(),
        'distillery' => $faker->word(),
        'age' => $faker->numberBetween(100),
        'barrel' => $faker->word(),
    ];
});

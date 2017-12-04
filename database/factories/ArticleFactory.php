<?php

use Faker\Generator as Faker;

$factory->define(App\Article::class, function (Faker $faker) {
    return [
        'author' => $faker->name,
        'body' => $faker->paragraph(6)
    ];
});

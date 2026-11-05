<?php

use Inertia\Testing\AssertableInertia as Assert;

test('every presentation section renders its page component', function (string $routeName, string $component) {
    $this->get(route($routeName))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component($component));
})->with([
    'cover' => ['home', 'kansi'],
    'company' => ['yritys', 'yritys'],
    'segmentation' => ['segmentointi', 'segmentointi'],
    'persona' => ['asiakaspersoona', 'asiakaspersoona'],
    'journey' => ['ostopolku', 'ostopolku'],
    'reflection' => ['reflektointi', 'reflektointi'],
    'ai usage' => ['tekoaly', 'tekoaly'],
    'sources' => ['lahteet', 'lahteet'],
]);

test('authentication routes are not registered', function (string $uri) {
    $this->get($uri)->assertNotFound();
})->with(['/login', '/register', '/dashboard', '/settings/profile']);
